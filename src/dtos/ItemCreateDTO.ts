export class ItemCreateDTO {
    private stockID:number;
    private amount:number;
    private name:string;

    constructor(stockID:number, amount:number, name:string) {
        this.stockID = stockID;
        this.amount = amount;
        this.name = name;
    }
}