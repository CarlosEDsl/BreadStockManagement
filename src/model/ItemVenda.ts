
export class ItemVenda {
    private estoquePaesID:number;
    private quantidade:number;

    constructor(estoquePaesID:number, quantidade:number){
        this.estoquePaesID = estoquePaesID;
        this.quantidade = quantidade;
    }

    public getEstoquePaesId() {
        return this.estoquePaesID;
    }

    public getQuantidade() {
        return this.quantidade;
    }
}