import { BreadStock } from "../model/BreadStock";
import { BreadModality } from "../model/BreadModality";

export class BreadStockRepository{
    private static instance: BreadStockRepository;
    private stockArray: BreadStock[];

    constructor() {
        this.stockArray = []
    }

    public static getInstance(): BreadStockRepository {
        if(!BreadStockRepository.instance) {
            BreadStockRepository.instance = new BreadStockRepository();
        }
        return BreadStockRepository.instance;
    }



    createStockCount(stockArray:BreadStock){
        this.stockArray.push(stockArray);
    }

    searchById(id:number):BreadStock|undefined{
        return this.stockArray.find(stockArray => stockArray.getId() === id);
    }

    searchByModality(modality:BreadModality):BreadStock|undefined{
        return this.stockArray.find(stockArray => stockArray.getModality() === modality);
    }

    allStocks():BreadStock[]{
        return this.stockArray;
    }

    updateStock(stock:BreadStock):BreadStock{
        const index = this.stockArray.indexOf(stock);
        if(index !== -1){
            this.stockArray[index] = stock;
        }
        return this.stockArray[index];
    }

    deleteStock(stock:BreadStock){
        const index = this.stockArray.indexOf(stock);
        if(index !== -1){
            this.stockArray.splice(index);
        }
    }
}