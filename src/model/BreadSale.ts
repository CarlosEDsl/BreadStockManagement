import { IdGenerator } from "../utils/IdGenerator";
import { SaleItem } from "./SaleItem";

export class BreadSale {
    private _id: number;
    private _cpf: number;
    private _totalValue: number;
    private _items: Array<SaleItem>;

    constructor(cpf: number, totalValue: number, items: Array<SaleItem>, id?: number) {
        if (id !== undefined) {
            this._id = id;
        } else {
            this._id = this.generateID();
        }
        this._cpf = cpf;
        this._totalValue = totalValue;
        this._items = items;
    }

    private generateID():number{
        return IdGenerator.getNextID("Sale");
    }

    get id(): number {
        return this._id;
    }

    get cpf(): number {
        return this._cpf;
    }

    set cpf(value: number) {
        this._cpf = value;
    }

    get totalValue(): number {
        return this._totalValue;
    }

    set totalValue(value: number) {
        this._totalValue = value;
    }

    get items(): Array<SaleItem> {
        return this._items;
    }

    set items(value: Array<SaleItem>) {
        this._items = value;
    }
}
