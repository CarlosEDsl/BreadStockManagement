import { ArraysUtils } from '../utils/ArraysUtils';
import { BreadSale } from '../model/BreadSale';
import { error } from 'console';
import { BreadSaleRepository } from '../repository/BreadSaleRepository';
import { SaleItem } from '../model/SaleItem';
import { BreadStockRepository } from '../repository/BreadStockRepository';
import { ItemCreateDTO } from '../dtos/ItemCreateDTO';
import { SaleDTO } from '../dtos/SaleDTO';

export class BreadSaleService {
    breadSaleRepository = new BreadSaleRepository();
    private breadStockRepository: BreadStockRepository;
    
    constructor(){
        this.breadStockRepository = BreadStockRepository.getInstance();
    }

    create(saleData:any):SaleDTO {

        const {cpf, saleItems} = saleData;
        

        if(!cpf || !saleItems){
            throw new Error("Está faltando informações");
        }

        let sales:SaleItem[] = [];
        let totalValue:number=0;
        let itensDTO:ItemCreateDTO[] = [];


        //Verifications and SaleItems creation (Item by Item)
        saleItems.forEach(item => {

            if(!ArraysUtils.arrayEquals(Object.keys(item), ['stockId', 'amount'])) {
                throw new Error("Passagem dos items com parametros inválidos")
            }
            
            if(!this.breadStockRepository.searchById(item.stockId)){
                throw new Error(`O ID: ${item.stockId} não representa nenhum estoque`)
            }

            let newItem = new SaleItem(item.stockId, item.amount);
            sales.push(newItem);
            itensDTO.push(this.itemtoDTO(newItem));
            
            totalValue += item.amount;
        });

        const newSale = new BreadSale(cpf, totalValue, sales);
        this.breadSaleRepository.create(newSale);

        const saleDTO = new SaleDTO(newSale.id, newSale.cpf, itensDTO, newSale.totalValue);

        return saleDTO;
    }

    findById(id:number):BreadSale|undefined {
        return this.breadSaleRepository.searchById(id);
    }

    findCustomerSells(cpf:number):BreadSale[]|undefined {
        return this.breadSaleRepository.searchByCPF(cpf);
    }

    delete(id:number){
        let elementToDel:BreadSale|undefined = this.findById(id);
        if(elementToDel)
            this.breadSaleRepository.remove(elementToDel);
        else
            throw error("Sell not found");
    }

    itemtoDTO(item:SaleItem) {
        let name = this.breadStockRepository.searchById(item.getBreadStockID());
        if(!name) {
            throw new Error("Na conversão de DTO id não encontrado");
        }
        console.log(name.getModality());
        const itemDTO:ItemCreateDTO = new ItemCreateDTO(item.getBreadStockID(), item.getAmount(), name.getModality().getName()); 
        return itemDTO;
    }

}