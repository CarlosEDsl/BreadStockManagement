"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoquePaesRepository = void 0;
class EstoquePaesRepository {
    constructor() {
        this.estoqueLista = [];
    }
    createStockCount(estoqueLista) {
        this.estoqueLista.push(estoqueLista);
    }
    searchById(id) {
        return this.estoqueLista.find(estoqueLista => estoqueLista.id === id);
    }
    searchByModalidade(modalidade) {
        return this.estoqueLista.find(estoqueLista => estoqueLista.modalidade === modalidade);
    }
    allStocks() {
        return this.estoqueLista;
    }
    updateStock(estoqueItem) {
        const index = this.estoqueLista.indexOf(estoqueItem);
        if (index !== -1) {
            this.estoqueLista[index] = estoqueItem;
        }
        return index;
    }
    deleteStock(estoque) {
        const index = this.estoqueLista.indexOf(estoque);
        if (index !== -1) {
            this.estoqueLista.splice(index);
        }
    }
}
exports.EstoquePaesRepository = EstoquePaesRepository;
