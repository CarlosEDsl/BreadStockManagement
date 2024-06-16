import { IdGenerator } from "../utils/IdGenerator";
import { BreadModality } from "./BreadModality";

export class BreadStock {

    private id:number;
    private modality:BreadModality;
    private amount:number;
    private price:number;

    constructor(modality:BreadModality, amount:number, price:number, id?:number){
        this.modality = modality;
        this.amount = amount;
        this.price = price;
        if(id){
            this.id = id;
        }
        else{
            this.id = this.generateID();
        }
    }
    
    private generateID():number{
        return IdGenerator.getNextID("Stock");
    }
    
    public getId() : number {
        return this.id; 
    }

    public getModality() : BreadModality {
        return this.modality;
    }

    public setModality(modalide:BreadModality) {
        this.modality = modalide;
    }

    public getAmount() : number {
        return this.amount;
    }

    public setAmount(quantidade:number) {
        this.amount = quantidade;
    }
    
    public setPrice(price:number) {
        this.price = price;
    }

    public getPrice() {
        return this.price;
    }

}