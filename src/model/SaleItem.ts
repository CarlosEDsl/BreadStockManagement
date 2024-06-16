
export class SaleItem {
    private breadStockID:number;
    private amount:number;

    constructor(breadStockID:number, amount:number){
        this.breadStockID = breadStockID;
        this.amount = amount;
    }

    public getBreadStockID() {
        return this.breadStockID;
    }

    public getAmount() {
        return this.amount;
    }
}