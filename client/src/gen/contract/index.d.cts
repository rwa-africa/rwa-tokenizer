import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type Person = { uuid: string;
                       firstName: string;
                       lastName: string;
                       birthday: Uint8Array;
                       birthplace: string;
                       gender: number;
                       agencyAffiliation: string
                     };

export type Asset = { uuid: string;
                      name: string;
                      type: number;
                      coordinates: string;
                      currentOwner: string;
                      registeredOn: Uint8Array
                    };

export type Agency = { name: string; jurisdiction: string; role: number };

export type Transaction = { asset: Asset;
                            buyer: Person;
                            seller: Person;
                            notary: Person;
                            witnesses: number[];
                            deedDate: Uint8Array;
                            transferDate: Uint8Array
                          };

export type Witnesses<T> = {
}

export type ImpureCircuits<T> = {
}

export type PureCircuits = {
  add_asset(asset: Asset): void;
  get_asset(id: string): void;
  update_asset(asset: Asset): void;
  list_assets(owner: string): void;
  transfer_asset(asset: Asset, sourceOwner: string, targetOwner: string): void;
  delete_asset(id: string): void;
}

export type Circuits<T> = {
  add_asset(context: __compactRuntime.CircuitContext<T>, asset: Asset): __compactRuntime.CircuitResults<T, void>;
  get_asset(context: __compactRuntime.CircuitContext<T>, id: string): __compactRuntime.CircuitResults<T, void>;
  update_asset(context: __compactRuntime.CircuitContext<T>, asset: Asset): __compactRuntime.CircuitResults<T, void>;
  list_assets(context: __compactRuntime.CircuitContext<T>, owner: string): __compactRuntime.CircuitResults<T, void>;
  transfer_asset(context: __compactRuntime.CircuitContext<T>,
                 asset: Asset,
                 sourceOwner: string,
                 targetOwner: string): __compactRuntime.CircuitResults<T, void>;
  delete_asset(context: __compactRuntime.CircuitContext<T>, id: string): __compactRuntime.CircuitResults<T, void>;
}

export type Ledger = {
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<T, W extends Witnesses<T> = Witnesses<T>> {
  witnesses: W;
  circuits: Circuits<T>;
  impureCircuits: ImpureCircuits<T>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<T>): __compactRuntime.ConstructorResult<T>;
}

export declare function ledger(state: __compactRuntime.StateValue): Ledger;
export declare const pureCircuits: PureCircuits;
