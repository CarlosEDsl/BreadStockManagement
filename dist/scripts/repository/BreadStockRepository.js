"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadStockRepository = void 0;
class BreadStockRepository {
    constructor() {
        this.stockArray = [];
    }
    static getInstance() {
        if (!BreadStockRepository.instance) {
            BreadStockRepository.instance = new BreadStockRepository();
        }
        return BreadStockRepository.instance;
    }
    createStockCount(stockArray) {
        this.stockArray.push(stockArray);
    }
    searchById(id) {
        return this.stockArray.find(stockArray => stockArray.getId() === id);
    }
    searchByModality(modality) {
        return this.stockArray.find(stockArray => stockArray.getModality() === modality);
    }
    allStocks() {
        return this.stockArray;
    }
    updateStock(stock) {
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
    deleteStock(stock) {
        const index = this.stockArray.findIndex(stockArray => stockArray.getId() === stock.getId());
        if (index !== -1) {
            this.stockArray[index].setAmount(stock.getAmount());
        }
        return this.stockArray[index];
    }
}
exports.BreadStockRepository = BreadStockRepository;
