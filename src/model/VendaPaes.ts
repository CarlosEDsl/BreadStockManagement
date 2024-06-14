import { ItemVenda } from "./ItemVenda";

export class VendaPaes {
    id:number;
    cpfCliente:number;
    valorTotal:number;
    itensComprados:Array<ItemVenda>;

    constructor(cpfCliente:number, valorTotal:number, itensComprados:Array<ItemVenda>, id?:number) {
        if(id){
            this.id = id;
        }
        else{
            this.id = this.gerarId();
        }
        this.cpfCliente = cpfCliente;
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
    }

    private gerarId(){
        return Date.now();
    }

}