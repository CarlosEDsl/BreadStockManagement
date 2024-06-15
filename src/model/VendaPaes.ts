import { IdGenerator } from "../utils/IdGenerator";
import { ItemVenda } from "./ItemVenda";

export class VendaPaes {
    private _id: number;
    private _cpfCliente: number;
    private _valorTotal: number;
    private _itensComprados: Array<ItemVenda>;

    constructor(cpfCliente: number, valorTotal: number, itensComprados: Array<ItemVenda>, id?: number) {
        if (id !== undefined) {
            this._id = id;
        } else {
            this._id = this.gerarId();
        }
        this._cpfCliente = cpfCliente;
        this._valorTotal = valorTotal;
        this._itensComprados = itensComprados;
    }

    private gerarId():number{
        return IdGenerator.getNextID("Sale");
    }

    get id(): number {
        return this._id;
    }

    get cpfCliente(): number {
        return this._cpfCliente;
    }

    set cpfCliente(value: number) {
        this._cpfCliente = value;
    }

    get valorTotal(): number {
        return this._valorTotal;
    }

    set valorTotal(value: number) {
        this._valorTotal = value;
    }

    get itensComprados(): Array<ItemVenda> {
        return this._itensComprados;
    }

    set itensComprados(value: Array<ItemVenda>) {
        this._itensComprados = value;
    }
}
