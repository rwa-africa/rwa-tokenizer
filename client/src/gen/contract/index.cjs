'use strict';
const __compactRuntime = require('@midnight-ntwrk/compact-runtime');
const expectedRuntimeVersionString = '0.7.0';
const expectedRuntimeVersion = expectedRuntimeVersionString.split('-')[0].split('.').map(Number);
const actualRuntimeVersion = __compactRuntime.versionString.split('-')[0].split('.').map(Number);
if (expectedRuntimeVersion[0] != actualRuntimeVersion[0]
     || (actualRuntimeVersion[0] == 0 && expectedRuntimeVersion[1] != actualRuntimeVersion[1])
     || expectedRuntimeVersion[1] > actualRuntimeVersion[1]
     || (expectedRuntimeVersion[1] == actualRuntimeVersion[1] && expectedRuntimeVersion[2] > actualRuntimeVersion[2]))
   throw new __compactRuntime.CompactError(`Version mismatch: compiled code expects ${expectedRuntimeVersionString}, runtime is ${__compactRuntime.versionString}`);
{ const MAX_FIELD = 102211695604070082112571065507755096754575920209623522239390234855480569854275933742834077002685857629445612735086326265689167708028928n;
  if (__compactRuntime.MAX_FIELD !== MAX_FIELD)
     throw new __compactRuntime.CompactError(`compiler thinks maximum field value is ${MAX_FIELD}; run time thinks it is ${__compactRuntime.MAX_FIELD}`)
}

const _descriptor_0 = new __compactRuntime.CompactTypeOpaqueString();

const _descriptor_1 = new __compactRuntime.CompactTypeEnum(1, 1);

const _descriptor_2 = new __compactRuntime.CompactTypeOpaqueUint8Array();

class _Asset_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_2.alignment())))));
  }
  fromValue(value) {
    return {
      uuid: _descriptor_0.fromValue(value),
      name: _descriptor_0.fromValue(value),
      type: _descriptor_1.fromValue(value),
      coordinates: _descriptor_0.fromValue(value),
      currentOwner: _descriptor_0.fromValue(value),
      registeredOn: _descriptor_2.fromValue(value)
    }
  }
  toValue(value) {
    return _descriptor_0.toValue(value.uuid).concat(_descriptor_0.toValue(value.name).concat(_descriptor_1.toValue(value.type).concat(_descriptor_0.toValue(value.coordinates).concat(_descriptor_0.toValue(value.currentOwner).concat(_descriptor_2.toValue(value.registeredOn))))));
  }
}

const _descriptor_3 = new _Asset_0();

const _descriptor_4 = new __compactRuntime.CompactTypeBytes(32);

class _ContractAddress_0 {
  alignment() {
    return _descriptor_4.alignment();
  }
  fromValue(value) {
    return {
      bytes: _descriptor_4.fromValue(value)
    }
  }
  toValue(value) {
    return _descriptor_4.toValue(value.bytes);
  }
}

const _descriptor_5 = new _ContractAddress_0();

const _descriptor_6 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

const _descriptor_7 = new __compactRuntime.CompactTypeBoolean();

const _descriptor_8 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

class Contract {
  witnesses;
  constructor(...args) {
    if (args.length !== 1)
      throw new __compactRuntime.CompactError(`Contract constructor: expected 1 argument, received ${args.length}`);
    const witnesses = args[0];
    if (typeof(witnesses) !== 'object')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor is not an object');
    this.witnesses = witnesses;
    this.circuits = {
      add_asset: (...args_0) => {
        if (args_0.length !== 2)
          throw new __compactRuntime.CompactError(`add_asset: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
        const contextOrig = args_0[0];
        const asset = args_0[1];
        if (!(typeof(contextOrig) === 'object' && contextOrig.originalState != undefined && contextOrig.transactionContext != undefined))
          __compactRuntime.type_error('add_asset',
                                      'argument 1 (as invoked from Typescript)',
                                      '/Users/ntafie/Dev-Studios/active-projects/rwa-tokenizer/contracts/midnight/manager.compact line 11, char 1',
                                      'CircuitContext',
                                      contextOrig)
        if (!(typeof(asset) === 'object' && true && true && typeof(asset.type) === 'number' && asset.type >= 0 && asset.type <= 1 && true && true && true))
          __compactRuntime.type_error('add_asset',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      '/Users/ntafie/Dev-Studios/active-projects/rwa-tokenizer/contracts/midnight/manager.compact line 11, char 1',
                                      'struct Asset<uuid: Opaque<"string">, name: Opaque<"string">, type: Enum<Category, Land, building>, coordinates: Opaque<"string">, currentOwner: Opaque<"string">, registeredOn: Opaque<"Uint8Array">>',
                                      asset)
        const context = { ...contextOrig };
        const partialProofData = {
          input: {
            value: _descriptor_3.toValue(asset),
            alignment: _descriptor_3.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result = this.#_add_asset_0(context, partialProofData, asset);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result, context: context, proofData: partialProofData };
      },
      get_asset: (...args_0) => {
        if (args_0.length !== 2)
          throw new __compactRuntime.CompactError(`get_asset: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
        const contextOrig = args_0[0];
        const id = args_0[1];
        if (!(typeof(contextOrig) === 'object' && contextOrig.originalState != undefined && contextOrig.transactionContext != undefined))
          __compactRuntime.type_error('get_asset',
                                      'argument 1 (as invoked from Typescript)',
                                      '/Users/ntafie/Dev-Studios/active-projects/rwa-tokenizer/contracts/midnight/manager.compact line 15, char 1',
                                      'CircuitContext',
                                      contextOrig)
        const context = { ...contextOrig };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(id),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result = this.#_get_asset_0(context, partialProofData, id);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result, context: context, proofData: partialProofData };
      },
      update_asset: (...args_0) => {
        if (args_0.length !== 2)
          throw new __compactRuntime.CompactError(`update_asset: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
        const contextOrig = args_0[0];
        const asset = args_0[1];
        if (!(typeof(contextOrig) === 'object' && contextOrig.originalState != undefined && contextOrig.transactionContext != undefined))
          __compactRuntime.type_error('update_asset',
                                      'argument 1 (as invoked from Typescript)',
                                      '/Users/ntafie/Dev-Studios/active-projects/rwa-tokenizer/contracts/midnight/manager.compact line 19, char 1',
                                      'CircuitContext',
                                      contextOrig)
        if (!(typeof(asset) === 'object' && true && true && typeof(asset.type) === 'number' && asset.type >= 0 && asset.type <= 1 && true && true && true))
          __compactRuntime.type_error('update_asset',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      '/Users/ntafie/Dev-Studios/active-projects/rwa-tokenizer/contracts/midnight/manager.compact line 19, char 1',
                                      'struct Asset<uuid: Opaque<"string">, name: Opaque<"string">, type: Enum<Category, Land, building>, coordinates: Opaque<"string">, currentOwner: Opaque<"string">, registeredOn: Opaque<"Uint8Array">>',
                                      asset)
        const context = { ...contextOrig };
        const partialProofData = {
          input: {
            value: _descriptor_3.toValue(asset),
            alignment: _descriptor_3.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result = this.#_update_asset_0(context, partialProofData, asset);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result, context: context, proofData: partialProofData };
      },
      list_assets: (...args_0) => {
        if (args_0.length !== 2)
          throw new __compactRuntime.CompactError(`list_assets: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
        const contextOrig = args_0[0];
        const owner = args_0[1];
        if (!(typeof(contextOrig) === 'object' && contextOrig.originalState != undefined && contextOrig.transactionContext != undefined))
          __compactRuntime.type_error('list_assets',
                                      'argument 1 (as invoked from Typescript)',
                                      '/Users/ntafie/Dev-Studios/active-projects/rwa-tokenizer/contracts/midnight/manager.compact line 23, char 1',
                                      'CircuitContext',
                                      contextOrig)
        const context = { ...contextOrig };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(owner),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result = this.#_list_assets_0(context, partialProofData, owner);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result, context: context, proofData: partialProofData };
      },
      transfer_asset: (...args_0) => {
        if (args_0.length !== 4)
          throw new __compactRuntime.CompactError(`transfer_asset: expected 4 arguments (as invoked from Typescript), received ${args_0.length}`);
        const contextOrig = args_0[0];
        const asset = args_0[1];
        const sourceOwner = args_0[2];
        const targetOwner = args_0[3];
        if (!(typeof(contextOrig) === 'object' && contextOrig.originalState != undefined && contextOrig.transactionContext != undefined))
          __compactRuntime.type_error('transfer_asset',
                                      'argument 1 (as invoked from Typescript)',
                                      '/Users/ntafie/Dev-Studios/active-projects/rwa-tokenizer/contracts/midnight/manager.compact line 27, char 1',
                                      'CircuitContext',
                                      contextOrig)
        if (!(typeof(asset) === 'object' && true && true && typeof(asset.type) === 'number' && asset.type >= 0 && asset.type <= 1 && true && true && true))
          __compactRuntime.type_error('transfer_asset',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      '/Users/ntafie/Dev-Studios/active-projects/rwa-tokenizer/contracts/midnight/manager.compact line 27, char 1',
                                      'struct Asset<uuid: Opaque<"string">, name: Opaque<"string">, type: Enum<Category, Land, building>, coordinates: Opaque<"string">, currentOwner: Opaque<"string">, registeredOn: Opaque<"Uint8Array">>',
                                      asset)
        const context = { ...contextOrig };
        const partialProofData = {
          input: {
            value: _descriptor_3.toValue(asset).concat(_descriptor_0.toValue(sourceOwner).concat(_descriptor_0.toValue(targetOwner))),
            alignment: _descriptor_3.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment()))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result = this.#_transfer_asset_0(context,
                                               partialProofData,
                                               asset,
                                               sourceOwner,
                                               targetOwner);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result, context: context, proofData: partialProofData };
      },
      delete_asset: (...args_0) => {
        if (args_0.length !== 2)
          throw new __compactRuntime.CompactError(`delete_asset: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
        const contextOrig = args_0[0];
        const id = args_0[1];
        if (!(typeof(contextOrig) === 'object' && contextOrig.originalState != undefined && contextOrig.transactionContext != undefined))
          __compactRuntime.type_error('delete_asset',
                                      'argument 1 (as invoked from Typescript)',
                                      '/Users/ntafie/Dev-Studios/active-projects/rwa-tokenizer/contracts/midnight/manager.compact line 31, char 1',
                                      'CircuitContext',
                                      contextOrig)
        const context = { ...contextOrig };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(id),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result = this.#_delete_asset_0(context, partialProofData, id);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result, context: context, proofData: partialProofData };
      }
    };
    this.impureCircuits = {};
  }
  initialState(...args) {
    if (args.length !== 1)
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 1 argument (as invoked from Typescript), received ${args.length}`);
    const constructorContext = args[0];
    if (typeof(constructorContext) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!('initialZswapLocalState' in constructorContext)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)`);
    }
    if (typeof(constructorContext.initialZswapLocalState) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object`);
    }
    const state = new __compactRuntime.ContractState();
    let stateValue = __compactRuntime.StateValue.newArray();
    stateValue = stateValue.arrayPush(__compactRuntime.StateValue.newNull());
    state.data = stateValue;
    const context = {
      originalState: state,
      currentPrivateState: constructorContext.initialPrivateState,
      currentZswapLocalState: constructorContext.initialZswapLocalState,
      transactionContext: new __compactRuntime.QueryContext(state.data, __compactRuntime.dummyContractAddress())
    };
    const partialProofData = {
      input: { value: [], alignment: [] },
      output: undefined,
      publicTranscript: [],
      privateTranscriptOutputs: []
    };
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(0n),
                                                                            alignment: _descriptor_8.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }
                    ])
    state.data = context.transactionContext.state;
    return {
      currentContractState: state,
      currentPrivateState: context.currentPrivateState,
      currentZswapLocalState: context.currentZswapLocalState
    }
  }
  #_add_asset_0(context, partialProofData, asset) { return; }
  #_get_asset_0(context, partialProofData, id) { return; }
  #_update_asset_0(context, partialProofData, asset) { return; }
  #_list_assets_0(context, partialProofData, owner) { return; }
  #_transfer_asset_0(context, partialProofData, asset, sourceOwner, targetOwner)
  {
    return;
  }
  #_delete_asset_0(context, partialProofData, id) { return; }
  static _query(context, partialProofData, prog) {
    var res;
    try {
      res = context.transactionContext.query(prog, __compactRuntime.CostModel.dummyCostModel());
    } catch (err) {
      throw new __compactRuntime.CompactError(err.toString());
    }
    context.transactionContext = res.context;
    var reads = res.events.filter((e) => e.tag === 'read');
    var i = 0;
    partialProofData.publicTranscript = partialProofData.publicTranscript.concat(prog.map((op) => {
      if(typeof(op) === 'object' && 'popeq' in op) {
        return { popeq: {
          ...op.popeq,
          result: reads[i++].content,
        } };
      } else {
        return op;
      }
    }));
    if(res.events.length == 1 && res.events[0].tag === 'read') {
      return res.events[0].content;
    } else {
      return res.events;
    }
  }
}
function ledger(state) {
  const context = {
    originalState: state,
    transactionContext: new __compactRuntime.QueryContext(state, __compactRuntime.dummyContractAddress())
  };
  const partialProofData = {
    input: { value: [], alignment: [] },
    output: undefined,
    publicTranscript: [],
    privateTranscriptOutputs: []
  };
  return {
  };
}
const _emptyContext = {
  originalState: new __compactRuntime.ContractState(),
  transactionContext: new __compactRuntime.QueryContext(new __compactRuntime.ContractState().data, __compactRuntime.dummyContractAddress())
};
const _dummyContract = new Contract({ });
const pureCircuits = {
  add_asset: (...args_3) => _dummyContract.circuits.add_asset(_emptyContext, ...args_3).result,
  get_asset: (...args_4) => _dummyContract.circuits.get_asset(_emptyContext, ...args_4).result,
  update_asset: (...args_1) => _dummyContract.circuits.update_asset(_emptyContext, ...args_1).result,
  list_assets: (...args_2) => _dummyContract.circuits.list_assets(_emptyContext, ...args_2).result,
  transfer_asset: (...args) => _dummyContract.circuits.transfer_asset(_emptyContext, ...args).result,
  delete_asset: (...args_0) => _dummyContract.circuits.delete_asset(_emptyContext, ...args_0).result
};
const contractReferenceLocations = { tag: 'publicLedgerArray', indices: { } };
exports.Contract = Contract;
exports.ledger = ledger;
exports.pureCircuits = pureCircuits;
exports.contractReferenceLocations = contractReferenceLocations;
//# sourceMappingURL=index.cjs.map
