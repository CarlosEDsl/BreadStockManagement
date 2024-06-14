"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadePaes = void 0;
class ModalidadePaes {
    constructor(nome, preco, vegano) {
        this.nome = nome;
        this.preco = preco;
        this.vegano = vegano;
        this.id = this.gerarId();
    }
    gerarId() {
        return Date.now();
    }
}
exports.ModalidadePaes = ModalidadePaes;
