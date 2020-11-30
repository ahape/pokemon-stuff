import { TypeName } from "./typeNames";

export interface IPokemon {
    attack: number; // Base stat
    average: number;
    defense: number; // Base stat
    id: number;
    hp: number; // Base stat
    name: string;
    special: number; // Base stat (in gen 1 this accts for special def/atk)
    speed: number; // Base stat
    total: number;
    type: TypeName[];
}
