import { VendaPaes } from './../model/VendaPaes';
import { error } from 'console';
import { VendaPaesRepository } from './../repository/VendaPaesRepository';
import { ItemVenda } from '../model/ItemVenda';
export class VendaPaesService {
    vendaPaesRepository = new VendaPaesRepository();


    //id:number;
    //cpfCliente:number;
    //valorTotal:number;
    //itensComprados:Array<ItemVenda>;
    create(sellData:any):VendaPaes {

        //cpfCliente:number, valorTotal:number, itensComprados:Array<ItemVenda>
        const {cpfCliente, valorTotal, itensComprados} = sellData;
        

        if(!cpfCliente || !valorTotal || !itensComprados){
            throw error("Está faltando informações");
        }

        let venda:ItemVenda[] = [];
        for(let i=0; i < itensComprados.lenght; i++){
            venda.push(new ItemVenda(itensComprados['estoquePaesID'], itensComprados['quantidade']));
        }

        const novaVenda = new VendaPaes(cpfCliente, valorTotal, venda);
        this.vendaPaesRepository.create(novaVenda);
        return novaVenda;
    }

    findById(id:number):VendaPaes|undefined {
        return this.vendaPaesRepository.searchById(id);
    }

    findCustomerSells(cpf:number):VendaPaes[]|undefined {
        return this.vendaPaesRepository.searchByCPF(cpf);
    }

    update(newSellData:any){
        const {id, cpfClient, valorTotal, itensComprados} = newSellData;
        if(!id || !cpfClient || !valorTotal || !itensComprados)
            throw error("Dados não montados corretamente");
        
        let venda:VendaPaes|undefined = this.findById(id);


        if(venda){
            const vendaAtualizada = new VendaPaes(cpfClient, valorTotal, itensComprados);
            return this.vendaPaesRepository.update(vendaAtualizada);
        }
        return undefined;
    }

    delete(id:number){
        let elementToDel:VendaPaes|undefined = this.findById(id);
        if(elementToDel)
            this.vendaPaesRepository.remove(elementToDel);
        else
            throw error("Sell not found");
    }

}