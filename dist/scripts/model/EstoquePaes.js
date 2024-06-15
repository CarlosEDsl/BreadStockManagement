"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoquePaes = void 0;
class EstoquePaes {
    constructor(modalidade, quantidade, id) {
        this.modalidade = modalidade;
        this.quantidade = quantidade;
        if (id) {
            this.id = id;
        }
        else {
            this.id = this.gerarId();
        }
    }
    gerarId() {
        return Date.now();
    }
    getId() {
        return this.id;
    }
    getModalidade() {
        return this.modalidade;
    }
    setModalidade(modalide) {
        this.modalidade = modalide;
    }
    getQuantidade() {
        return this.quantidade;
    }
    setQuantidade(quantidade) {
        this.quantidade = quantidade;
    }
}
exports.EstoquePaes = EstoquePaes;
