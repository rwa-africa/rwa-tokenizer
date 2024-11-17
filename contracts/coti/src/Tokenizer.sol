// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.24 and less than 0.9.0
pragma solidity ^0.8.24;
import "@openzeppelin-contracts-5.0.2/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin-contracts-5.0.2/access/Ownable.sol";
import {Gender, Category, Person, Asset, Metadata} from "./Asset.sol";

contract Tokenizer is ERC721Enumerable, Ownable {
    uint256 private assetIDCounter = 1;

    mapping(uint256 => Asset) private assets;
    mapping(uint256 => mapping(address => bool)) private approvers;
    uint256[] private assetIDs;

    event AssetCreated(uint256 assetID, string name, address indexed owner);
    event AssetUpdated(uint256 assetID, string name, address indexed updatedBy);
    event AssetDeleted(uint256 assetID, address indexed deletedBy);

    constructor() Ownable(msg.sender) ERC721("RWAToken", "RWAT") {}

    /*
     *
     * Add new Asset to chain/ledger
     *
     */
    function createAsset(
        string memory _name,
        string memory _description,
        uint256 _price,
        string memory _currency,
        Category _category,
        Person memory _owner,
        Metadata[] memory _metadata
    ) public {
        uint256 newAssetID = assetIDCounter++;

        Asset storage newAsset = assets[newAssetID];
        newAsset.id = newAssetID;
        newAsset.name = _name;
        newAsset.description = _description;
        newAsset.category = _category;
        newAsset.price = _price;
        newAsset.currency = _currency;
        newAsset.registeredOn = block.timestamp;
        newAsset.owner = _owner;

        for (uint256 i = 0; i < _metadata.length; i++) {
            newAsset.metadata.push(_metadata[i]);
        }

        assetIDs.push(newAssetID);
        _mint(_owner.walletAddress, newAssetID);
        assetIDCounter++;

        emit AssetCreated(newAssetID, _name, msg.sender);
    }

    /*
     *
     * Get Asset by ID
     *
     */
    function getAsset(uint256 assetID)
    public
    view
    returns (
        uint256,
        string memory,
        string memory,
        uint256,
        string memory,
        uint256,
        Category,
        Person memory,
        Metadata[] memory
    )
    {
        require(_exists(assetID), "Asset does not exist");

        Asset storage asset = assets[assetID];

        Metadata[] memory metadataList = new Metadata[](asset.metadata.length);
        for (uint256 i = 0; i < asset.metadata.length; i++) {
            metadataList[i] = asset.metadata[i];
        }

        return (
            asset.id,
            asset.name,
            asset.description,
            asset.price,
            asset.currency,
            asset.registeredOn,
            asset.category,
            asset.owner,
            metadataList
        );
    }

    /*
     *
     * List all assets on chain/ledger
     *
     */
    function listAssets()
    public
    view
    returns (
        uint256[] memory ids,
        string[] memory names,
        string[] memory descriptions,
        uint256[] memory prices,
        string[] memory currencies,
        uint256[] memory registeredOn,
        Category[] memory categories,
        Person[] memory owners,
        Metadata[][] memory metadataList
    )
    {
        uint256 assetCount = assetIDs.length;

        ids = new uint256[](assetCount);
        names = new string[](assetCount);
        descriptions = new string[](assetCount);
        prices = new uint256[](assetCount);
        currencies = new string[](assetCount);
        registeredOn = new uint256[](assetCount);
        categories = new Category[](assetCount);
        owners = new Person[](assetCount);
        metadataList = new Metadata[][](assetCount);

        for (uint256 i = 0; i < assetCount; i++) {
            uint256 assetID = assetIDs[i];
            Asset storage asset = assets[assetID];

            ids[i] = asset.id;
            names[i] = asset.name;
            descriptions[i] = asset.description;
            prices[i] = asset.price;
            currencies[i] = asset.currency;
            registeredOn[i] = asset.registeredOn;
            categories[i] = asset.category;
            owners[i] = asset.owner;
            metadataList[i] = asset.metadata;
        }

        return (
            ids,
            names,
            descriptions,
            prices,
            currencies,
            registeredOn,
            categories,
            owners,
            metadataList
        );
    }

    /*
     *
     * Update existing asset to chain/ledger
     *
     */
    function updateAsset(
        uint256 assetID,
        string memory _name,
        string memory _description,
        uint256 _price,
        string memory _currency,
        Category _category,
        Metadata[] memory _metadata
    ) public onlyOwner {
        require(_exists(assetID), "Asset does not exist");

        Asset storage asset = assets[assetID];

        asset.name = _name;
        asset.description = _description;
        asset.price = _price;
        asset.currency = _currency;
        asset.category = _category;

        delete asset.metadata;
        for (uint256 i = 0; i < _metadata.length; i++) {
            asset.metadata.push(_metadata[i]);
        }

        emit AssetUpdated(assetID, _name, msg.sender);
    }

    /*
     *
     * Delete existing asset on chain/ledger
     *
     */
    function deleteAsset(uint256 assetID) public onlyOwner {
        require(_exists(assetID), "Asset does not exist");

        delete assets[assetID];

        for (uint256 i = 0; i < assetIDs.length; i++) {
            if (assetIDs[i] == assetID) {
                assetIDs[i] = assetIDs[assetIDs.length - 1];
                assetIDs.pop();
                break;
            }
        }
        _burn(assetID);

        emit AssetDeleted(assetID, msg.sender);
    }

    /*
     *
     * Transfer asset ownership from current owner to new owner
     *
     */
    function transferAsset(uint256 assetID, Person memory newOwner) public {
        require(_exists(assetID), "Asset does not exist");
        require(
            ownerOf(assetID) == msg.sender,
            "Caller is not the current asset owner"
        );
        require(newOwner.id != 0, "Invalid new owner ID");
        require(
            bytes(newOwner.firstName).length > 0,
            "New owner details required"
        );
        require(
            newOwner.gender == Gender.Male || newOwner.gender == Gender.Female,
            "Invalid gender"
        );
        require(newOwner.walletAddress != address(0), "Invalid owner address");

        Asset storage asset = assets[assetID];
        asset.owner = newOwner;

        // Transfer the token (ownership) using ERC721's transfer function
        _transfer(msg.sender, newOwner.walletAddress, assetID);

        emit Transfer(msg.sender, newOwner.walletAddress, assetID);
    }

    function approveSale() public {}

    function _exists(uint256 assetID) internal view returns (bool) {
        return assets[assetID].id != 0;
    }
}
