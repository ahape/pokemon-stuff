import { CategoryName } from "./categoryname";
import { TypeName } from "./typename";

export interface IMove {
    accuracy: number;
    category: CategoryName;
    name: string;
    power: number;
    pp: number;
    type: TypeName;
}

