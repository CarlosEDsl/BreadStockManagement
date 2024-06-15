"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaPaesService = void 0;
const VendaPaes_1 = require("./../model/VendaPaes");
const console_1 = require("console");
const VendaPaesRepository_1 = require("./../repository/VendaPaesRepository");
const ItemVenda_1 = require("../model/ItemVenda");
class VendaPaesService {
    constructor() {
        this.vendaPaesRepository = new VendaPaesRepository_1.VendaPaesRepository();
    }
    //id:number;
    //cpfCliente:number;
    //valorTotal:number;
    //itensComprados:Array<ItemVenda>;
    create(saleData) {
        //cpf:number, totalValue:number, items:Array<ItemVenda>
        const { cpf, items } = saleData;
        if (!cpf || !items) {
            throw new Error("Está faltando informações");
        }
        let sales = [];
        let totalValue = 0;
        items.forEach(item => {
            if (!ArraysUtils.arrayEquals(Object.keys(item), ['stockId', 'amount'])) {
                throw new Error("Passagem dos items com parametros inválidos");
            }
            sales.push(new ItemVenda_1.ItemVenda(item.stockId, item.amount));
            totalValue += item.amount;
        });
        const novaVenda = new VendaPaes_1.VendaPaes(cpf, totalValue, sales);
        this.vendaPaesRepository.create(novaVenda);
        return novaVenda;
    }
    findById(id) {
        return this.vendaPaesRepository.searchById(id);
    }
    findCustomerSells(cpf) {
        return this.vendaPaesRepository.searchByCPF(cpf);
    }
    update(newSellData) {
        const { id, cpfClient, valorTotal, itensComprados } = newSellData;
        if (!id || !cpfClient || !valorTotal || !itensComprados)
            throw (0, console_1.error)("Dados não montados corretamente");
        let venda = this.findById(id);
        if (venda) {
            const vendaAtualizada = new VendaPaes_1.VendaPaes(cpfClient, valorTotal, itensComprados);
            return this.vendaPaesRepository.update(vendaAtualizada);
        }
        return undefined;
    }
    delete(id) {
        let elementToDel = this.findById(id);
        if (elementToDel)
            this.vendaPaesRepository.remove(elementToDel);
        else
            throw (0, console_1.error)("Sell not found");
    }
}
exports.VendaPaesService = VendaPaesService;
