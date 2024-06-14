"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemVendaRepository = void 0;
class ItemVendaRepository {
    constructor() {
        this.vendas = [];
    }
    createSell(venda) {
        this.vendas.push(venda);
    }
    searchItemById(id) {
        return this.vendas.find(ItemVenda => ItemVenda.estoquePaesID == id);
    }
    deleteItem(venda) {
        const index = this.vendas.indexOf(venda);
        if (index !== -1) {
            this.vendas.splice(index);
        }
    }
}
exports.ItemVendaRepository = ItemVendaRepository;
