import { BreadModalityRepository } from '../repository/BreadModalityRepository';
import { BreadStock } from "../model/BreadStock";
import { BreadStockRepository } from "../repository/BreadStockRepository";
import { BreadModality } from '../model/BreadModality';

export class BreadStockService{
    breadStockRepository:BreadStockRepository;
    breadModalityRepository:BreadModalityRepository;

    constructor(){
        this.breadStockRepository = BreadStockRepository.getInstance();
        this.breadModalityRepository = BreadModalityRepository.getInstance();
    }

    findAll(): BreadStock[] {
        return this.breadStockRepository.allStocks();
    }

    create(estoqueInfo:any): BreadStock{
        const {modality, amount, price} = estoqueInfo;
        if(!modality || !amount) {
            throw new Error("Entra inválida");
        }

        const stockFind = this.find(undefined, modality)
            if(stockFind){
                throw new Error("Já existe um estoque cadastrado para essa modalidade");
            }

        const breadModality:BreadModality|undefined = this.breadModalityRepository.searchById(modality);
        if(!breadModality) {
            throw new Error("Essa modalidade não existe");
        }
        const newStock = new BreadStock(breadModality, amount, price);
        this.breadStockRepository.createStockCount(newStock);
        return newStock;
    }

    find(id:any, modality:any):BreadStock|undefined{
        if(id) {
            const idNumber: number = parseInt(id);
            return this.breadStockRepository.searchById(idNumber);
        }
        if(modality){
            return this.breadStockRepository.searchByModality(modality);
        }
        return undefined;

    }

    delete(id:any) {
        const stock = this.breadStockRepository.searchById(parseInt(id));
        if(!stock){
            throw new Error("Estoque não encontrado");
        }
        this.breadStockRepository.deleteStock(stock);
    }

    update(stockData:any): BreadStock {
        let {id, modality, amount, price} = stockData;
        if(!id || !modality || !amount || !stockData){
            throw new Error("Faltam dados");
        }

        modality = this.breadModalityRepository.searchById(modality);
        if(!this.breadStockRepository.searchById(id)){
            throw new Error("Estoque não encontrado");
        }
        let stock = new BreadStock(modality, amount, price, id);
        
        this.breadStockRepository.updateStock(stock);
        return stock;
    }


}