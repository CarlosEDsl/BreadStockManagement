"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemVenda = void 0;
class ItemVenda {
    constructor(estoquePaesID, quantidade) {
        this.estoquePaesID = estoquePaesID;
        this.quantidade = quantidade;
    }
    getEstoquePaesId() {
        return this.estoquePaesID;
    }
    getQuantidade() {
        return this.quantidade;
    }
}
exports.ItemVenda = ItemVenda;
