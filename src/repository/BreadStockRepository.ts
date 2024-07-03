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

    updateStock(stock: BreadStock): BreadStock {
        // Encontra o índice do item a ser atualizado
        const index = this.stockArray.findIndex(tstock => tstock.getId() === stock.getId());
    
        // Se o item for encontrado, atualiza-o
        if (index !== -1) {
          this.stockArray[index] = stock;
          return this.stockArray[index];
        }
    
        // Se o item não for encontrado, lança um erro
        throw new Error("Erro no update");
    }


    deleteStock(stock:BreadStock){
        const index = this.stockArray.findIndex(stockArray => stockArray.getId() === stock.getId())
        if(index !== -1){
            this.stockArray[index].setAmount(stock.getAmount());
        }
        return this.stockArray[index];
    }
}