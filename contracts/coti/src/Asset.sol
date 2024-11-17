// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

    enum Gender {
        Male,
        Female
    }

    enum Party {
        Witness,
        Government
    }

    enum Status {
        Pending,
        Approved
    }

    struct Person {
        uint256 id;
        string firstName;
        string lastName;
        string birthday;
        string birthplace;
        Gender gender;
        string agencyAffiliation;
        address walletAddress;
    }

    enum Category {
        Land,
        Building
    }

    struct Asset {
        uint256 id;
        string name;
        string description;
        uint256 price;
        string currency;
        uint256 registeredOn;
        Person owner;
        Category category;
        Transaction[] transactions;
        Metadata[] metadata;
    }

    struct Metadata {
        string name;
        string value;
    }

    enum Role {
        Notary,
        Government
    }

    struct Agency {
        string name;
        string jurisdiction;
        Role role;
    }

    struct Transaction {
        uint256 id;
        Asset asset;
        address owner;
        address buyer;
        address notary;
        uint256 price;
        uint256 fees;
        uint256 deedDate;
        uint256 transferDate;
        Agency[] agencies;
        Status status;
    }
