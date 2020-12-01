import { TypeName } from "./typeName";
import { CategoryName } from "./categoryName";

export interface IMove {
    accuracy: number;
    category: CategoryName;
    name: string;
    power: number;
    pp: number;
    type: TypeName;
}
