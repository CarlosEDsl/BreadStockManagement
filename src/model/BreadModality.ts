import { IdGenerator } from "../utils/IdGenerator";

export class BreadModality{
    private id:number;
    private name:string;
    private vegan:boolean;

    constructor(nome:string, vegano:boolean) {
        this.name = nome;
        this.vegan = vegano;
        this.id = this.generateID();
    }

    private generateID():number{
        return IdGenerator.getNextID("Modality");
    }
    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }
    public setName(name:string) {
        this.name = name;
    }
    public isVegan() {
        return this.vegan;
    }
    public setIsVegan(vegan:boolean) {
        this.vegan = vegan;
    }



}