"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoquePaesService = void 0;
const EstoquePaes_1 = require("../model/EstoquePaes");
const EstoquePaesRepository_1 = require("../repository/EstoquePaesRepository");
class EstoquePaesService {
    constructor() {
        this.estoqueRepository = new EstoquePaesRepository_1.EstoquePaesRepository();
    }
    findAll() {
        return this.estoqueRepository.allStocks();
    }
    create(estoqueInfo) {
        const { modalidade, quantidade } = estoqueInfo;
        if (!modalidade || !quantidade) {
            throw new Error("Entra inválida");
        }
        const estoqueEncontrado = this.find(undefined, modalidade);
        if (estoqueEncontrado) {
            throw new Error("Já existe um estoque cadastrado para essa modalidade");
        }
        const novoEstoque = new EstoquePaes_1.EstoquePaes(modalidade, quantidade);
        this.estoqueRepository.createStockCount(novoEstoque);
        return novoEstoque;
    }
    find(id, modalidade) {
        if (id) {
            const idNumber = parseInt(id);
            return this.estoqueRepository.searchById(idNumber);
        }
        if (modalidade) {
            return this.estoqueRepository.searchByModalidade(modalidade);
        }
        return undefined;
    }
    delete(id) {
        const estoque = this.estoqueRepository.searchById(id);
        if (!estoque) {
            throw new Error("Estoque não encontrado");
        }
        this.estoqueRepository.deleteStock(estoque);
    }
    update(stockData) {
        const { id, modalidade, quantidade } = stockData;
        if (!id || !modalidade || !quantidade) {
            throw new Error("Faltam dados");
        }
        let estoque = this.find(id, modalidade);
        if (!estoque) {
            throw new Error("Estoque não encontrado");
        }
        estoque.id = id;
        estoque.modalidade = modalidade;
        estoque.quantidade = quantidade;
        return estoque;
    }
}
exports.EstoquePaesService = EstoquePaesService;
