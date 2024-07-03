import { ArraysUtils } from '../utils/ArraysUtils';
import { BreadSale } from '../model/BreadSale';
import { error } from 'console';
import { BreadSaleRepository } from '../repository/BreadSaleRepository';
import { SaleItem } from '../model/SaleItem';
import { BreadStockRepository } from '../repository/BreadStockRepository';
import { ItemCreateDTO } from '../dtos/ItemCreateDTO';
import { SaleDTO } from '../dtos/SaleDTO';
import { BreadStock } from '../model/BreadStock';

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
        let oldStock:BreadStock[] = [];
        let stockErr:boolean = false;


        //Verifications and SaleItems creation (Item by Item)
        saleItems.forEach(item => {

            if(!ArraysUtils.arrayEquals(Object.keys(item), ['stockId', 'amount'])) {
                throw new Error("Passagem dos items com parametros inválidos")
            }

            const stock = this.breadStockRepository.searchById(item.stockId);
            if(!stock){
                throw new Error(`O ID: ${item.stockId} não representa nenhum estoque`);
            }

            oldStock.push(new BreadStock(stock?.getModality(), stock?.getAmount(), stock?.getPrice(), stock?.getId()));
        
            //Taking out from stock
            stock.setAmount(stock.getAmount() - item.amount);
            if(stock.getAmount() < 0){
                stockErr = true;
            }
            console.log(oldStock);

            let newItem = new SaleItem(item.stockId, item.amount);
            sales.push(newItem);
            itensDTO.push(this.itemtoDTO(newItem));

            let price = this.breadStockRepository.searchById(newItem.getBreadStockID())?.getPrice();
            if(price)
                totalValue += item.amount*price;
        });

        if(stockErr){
            for(let i=0; i < oldStock.length-1; i++) {
                console.log(oldStock[i]);
                this.breadStockRepository.updateStock(oldStock[i]);
            }
            throw new Error("Estoque insuficiente")
        }
            

        const newSale = new BreadSale(cpf, totalValue, sales);
        this.breadSaleRepository.create(newSale);

        const saleDTO: SaleDTO = {
            saleID: newSale.id,
            cpf: newSale.cpf,
            items: itensDTO,
            total: newSale.totalValue
        };

        return saleDTO;
    }

    findById(id:number):SaleDTO|undefined {
        console.log("oiiii")
        const sale = this.breadSaleRepository.searchById(id);
        console.log(id);
        console.log(sale);
        let itensDTO:ItemCreateDTO[] = [];

        sale?.items.forEach(item => {
            itensDTO.push(this.itemtoDTO(item));
        });
        if(sale){
            const saleDTO:SaleDTO = {
                saleID: sale?.id,
                cpf: sale?.cpf,
                items: itensDTO,
                total: sale?.totalValue
            }
            return saleDTO;
        }
        else {
            throw new Error("Venda não encontrada");
        }
    }

    findCustomerSells(cpf:number):BreadSale[]|undefined {
        return this.breadSaleRepository.searchByCPF(cpf);
    }

    delete(id:number){
        let elementToDel:any = this.findById(id);
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