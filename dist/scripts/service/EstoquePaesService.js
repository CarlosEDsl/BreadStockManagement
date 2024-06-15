"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoquePaesService = void 0;
const EstoquePaes_1 = require("../model/EstoquePaes");
const EstoquePaesRepository_1 = require("../repository/EstoquePaesRepository");
const ModalidadePaesService_1 = require("./ModalidadePaesService");
class EstoquePaesService {
    constructor() {
        this.estoqueRepository = new EstoquePaesRepository_1.EstoquePaesRepository();
        this.modalidadePaesService = new ModalidadePaesService_1.ModalidadePaesService();
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
        const estoque = this.estoqueRepository.searchById(parseInt(id));
        if (!estoque) {
            throw new Error("Estoque não encontrado");
        }
        this.estoqueRepository.deleteStock(estoque);
    }
    update(stockData) {
        let { id, modalidade, quantidade } = stockData;
        if (!id || !modalidade || !quantidade) {
            throw new Error("Faltam dados");
        }
        modalidade = this.modalidadePaesService.findByName(modalidade);
        if (this.estoqueRepository.searchById(id)) {
            throw new Error("Estoque não encontrado");
        }
        let estoque = new EstoquePaes_1.EstoquePaes(modalidade, quantidade, id);
        this.estoqueRepository.updateStock(modalidade);
        return estoque;
    }
}
exports.EstoquePaesService = EstoquePaesService;
