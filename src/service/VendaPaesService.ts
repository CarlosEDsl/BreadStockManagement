import { ArraysUtils } from './../utils/ArraysUtils';
import { VendaPaes } from './../model/VendaPaes';
import { error } from 'console';
import { VendaPaesRepository } from './../repository/VendaPaesRepository';
import { ItemVenda } from '../model/ItemVenda';
import { EstoquePaesRepository } from '../repository/EstoquePaesRepository';
import { ItemCreateDTO } from '../dtos/ItemCreateDTO';
import { SaleDTO } from '../dtos/SaleDTO';

export class VendaPaesService {
    vendaPaesRepository = new VendaPaesRepository();
    private estoquePaesRepository: EstoquePaesRepository;
    
    constructor(){
        this.estoquePaesRepository = EstoquePaesRepository.getInstance();
    }


    //id:number;
    //cpfCliente:number;
    //valorTotal:number;
    //itensComprados:Array<ItemVenda>;
    create(saleData:any):SaleDTO {

        const {cpf, saleItems} = saleData;
        

        if(!cpf || !saleItems){
            throw new Error("Está faltando informações");
        }

        let sales:ItemVenda[] = [];
        let totalValue:number=0;
        let itensDTO:ItemCreateDTO[] = [];

        saleItems.forEach(item => {

            if(!ArraysUtils.arrayEquals(Object.keys(item), ['stockId', 'amount'])) {
                throw new Error("Passagem dos items com parametros inválidos")
            }
            
            if(!this.estoquePaesRepository.searchById(item.stockId)){
                throw new Error(`O ID: ${item.stockId} não representa nenhum estoque`)
            }

            let newItem = new ItemVenda(item.stockId, item.amount);
            sales.push(newItem);
            itensDTO.push(this.itemtoDTO(newItem));
            
            totalValue += item.amount;
        });

        const novaVenda = new VendaPaes(cpf, totalValue, sales);
        this.vendaPaesRepository.create(novaVenda);

        const saleDTO = new SaleDTO(novaVenda.id, novaVenda.cpfCliente, itensDTO, novaVenda.valorTotal);

        return saleDTO;
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

    itemtoDTO(item:ItemVenda) {
        let name = this.estoquePaesRepository.searchById(item.getEstoquePaesId());
        if(!name) {
            throw new Error("Na conversão de DTO id não encontrado");
        }
        console.log(name.getModalidade());
        const itemDTO:ItemCreateDTO = new ItemCreateDTO(item.getEstoquePaesId(), item.getQuantidade(), name.getModalidade().getName()); 
        return itemDTO;
    }

}