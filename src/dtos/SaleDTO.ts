import { ItemCreateDTO } from "./ItemCreateDTO";

export class SaleDTO {
    private saleID:number;
    private cpf:number;
    private items:ItemCreateDTO[];
    private total:number;

    constructor(saleID:number, cpf:number, items:ItemCreateDTO[], total:number) {
        this.saleID = saleID;
        this.cpf = cpf;
        this.items = items;
        this.total = total;
    }
}