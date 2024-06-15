import { IdGenerator } from "../utils/IdGenerator";
import { ModalidadePaes } from "./ModalidadePaes";

export class EstoquePaes {

    private id:number;
    private modalidade:ModalidadePaes;
    private quantidade:number;
    private price:number;

    constructor(modalidade:ModalidadePaes, quantidade:number, price:number, id?:number){
        this.modalidade = modalidade;
        this.quantidade = quantidade
        this.price = price;
        if(id){
            this.id = id;
        }
        else{
            this.id = this.gerarId();
        }
    }
    
    private gerarId():number{
        return IdGenerator.getNextID("Stock");
    }
    
    public getId() : number {
        return this.id; 
    }

    public getModalidade() : ModalidadePaes {
        return this.modalidade;
    }

    public setModalidade(modalide:ModalidadePaes) {
        this.modalidade = modalide;
    }

    public getQuantidade() : number {
        return this.quantidade;
    }

    public setQuantidade(quantidade:number) {
        this.quantidade = quantidade;
    }
    
    public getPrice(price:number) {
        this.price = price;
    }

    public setPrice() {
        return this.price;
    }

}