import { ModalidadePaes } from "./ModalidadePaes";

export class EstoquePaes {
    private id:number;
    private modalidade:ModalidadePaes;
    private quantidade:number;

    constructor(modalidade:ModalidadePaes, quantidade:number, id?:number){
        this.modalidade = modalidade;
        this.quantidade = quantidade
        if(id){
            this.id = id;
        }
        else{
            this.id = this.gerarId();
        }
    }
    
    private gerarId():number{
        return Date.now();
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
    

}