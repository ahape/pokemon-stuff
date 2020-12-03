import { TypeName } from "./typename";
import { CategoryName } from "./categoryname";

export interface IMove {
    accuracy: number;
    category: CategoryName;
    name: string;
    power: number;
    pp: number;
    type: TypeName;
}
