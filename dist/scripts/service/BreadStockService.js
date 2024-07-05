"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadStockService = void 0;
const BreadModalityRepository_1 = require("../repository/BreadModalityRepository");
const BreadStock_1 = require("../model/BreadStock");
const BreadStockRepository_1 = require("../repository/BreadStockRepository");
class BreadStockService {
    constructor() {
        this.breadStockRepository = BreadStockRepository_1.BreadStockRepository.getInstance();
        this.breadModalityRepository = BreadModalityRepository_1.BreadModalityRepository.getInstance();
    }
    findAll() {
        return this.breadStockRepository.allStocks();
    }
    create(estoqueInfo) {
        const { modality, amount, price } = estoqueInfo;
        if (!modality || !amount) {
            throw new Error("Entra inválida");
        }
        const stockFind = this.find(undefined, modality);
        if (stockFind) {
            throw new Error("Já existe um estoque cadastrado para essa modalidade");
        }
        const breadModality = this.breadModalityRepository.searchById(modality);
        if (!breadModality) {
            throw new Error("Essa modalidade não existe");
        }
        const newStock = new BreadStock_1.BreadStock(breadModality, amount, price);
        this.breadStockRepository.createStockCount(newStock);
        return newStock;
    }
    find(id, modality) {
        if (id) {
            const idNumber = parseInt(id);
            return this.breadStockRepository.searchById(idNumber);
        }
        if (modality) {
            const modalityFind = this.breadModalityRepository.searchById(modality);
            if (modalityFind)
                return this.breadStockRepository.searchByModality(modalityFind);
        }
        return undefined;
    }
    delete(stockData) {
        const stock = this.breadStockRepository.searchById(parseInt(stockData.id));
        if (!stock) {
            throw new Error("Estoque não encontrado");
        }
        if (stock.getModality() != this.breadModalityRepository.searchById(stockData.modality) || stock.getPrice() !== stockData.price) {
            throw new Error("Existem dados divergentes na requisição de deletar");
        }
        if (stockData.amount > stock.getAmount())
            throw new Error("Não é possível remover uma quantia maior do que existe");
        stock.setAmount(stock.getAmount() - stockData.amount);
        return this.breadStockRepository.deleteStock(stock);
    }
    update(stockData) {
        let { id, modality, amount, price } = stockData;
        if (!id || !modality || !amount || !stockData) {
            console.log(stockData);
            throw new Error("Faltam dados");
        }
        modality = this.breadModalityRepository.searchById(modality);
        const oldStock = this.breadStockRepository.searchById(id);
        if ((oldStock === null || oldStock === void 0 ? void 0 : oldStock.getModality()) != modality) {
            throw new Error("O id e a modalidade não batem");
        }
        if (!oldStock) {
            throw new Error("Estoque não encontrado");
        }
        if (this.find(undefined, modality)) {
            throw new Error("Essa modalidade já possui estoque");
        }
        let stock = new BreadStock_1.BreadStock(modality, oldStock.getAmount() + amount, price, id);
        this.breadStockRepository.updateStock(stock);
        return stock;
    }
}
exports.BreadStockService = BreadStockService;
