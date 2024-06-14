"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoquePaes = void 0;
class EstoquePaes {
    constructor(modalidade, quantidade) {
        this.modalidade = modalidade;
        this.quantidade = quantidade;
        this.id = this.gerarId();
    }
    gerarId() {
        return Date.now();
    }
}
exports.EstoquePaes = EstoquePaes;
