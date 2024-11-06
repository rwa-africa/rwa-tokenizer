import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type Personel = { uuid: string;
                         firstName: string;
                         lastName: string;
                         birthday: string;
                         birthplace: string;
                         gender: number;
                         agencyAffiliation: string
                       };

export type Property = { uuid: string;
                         name: string;
                         type: number;
                         coordinates: string;
                         currentOwner: string;
                         registeredOn: string
                       };

export type Agency = { name: string; jurisdiction: string; role: number };

export type Transaction = { property: Property;
                            buyer: Personel;
                            seller: Personel;
                            notary: Personel;
                            paries: number;
                            deedDate: string;
                            transferDate: string
                          };

export type Witnesses<T> = {
}

export type ImpureCircuits<T> = {
}

export type PureCircuits = {
}

export type Circuits<T> = {
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
