"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadSaleService = void 0;
const ArraysUtils_1 = require("../utils/ArraysUtils");
const BreadSale_1 = require("../model/BreadSale");
const console_1 = require("console");
const BreadSaleRepository_1 = require("../repository/BreadSaleRepository");
const SaleItem_1 = require("../model/SaleItem");
const BreadStockRepository_1 = require("../repository/BreadStockRepository");
const ItemCreateDTO_1 = require("../dtos/ItemCreateDTO");
class BreadSaleService {
    constructor() {
        this.breadSaleRepository = new BreadSaleRepository_1.BreadSaleRepository();
        this.breadStockRepository = BreadStockRepository_1.BreadStockRepository.getInstance();
    }
    create(saleData) {
        const { cpf, saleItems } = saleData;
        if (!cpf || !saleItems) {
            throw new Error("Está faltando informações");
        }
        let sales = [];
        let totalValue = 0;
        let itensDTO = [];
        //Verifications and SaleItems creation (Item by Item)
        saleItems.forEach(item => {
            var _a;
            if (!ArraysUtils_1.ArraysUtils.arrayEquals(Object.keys(item), ['stockId', 'amount'])) {
                throw new Error("Passagem dos items com parametros inválidos");
            }
            const stock = this.breadStockRepository.searchById(item.stockId);
            if (!stock) {
                throw new Error(`O ID: ${item.stockId} não representa nenhum estoque`);
            }
            //Taking out from stock
            stock.setAmount(stock.getAmount() - item.amount);
            if (stock.getAmount() < 0) {
                stock.setAmount(stock.getAmount() + item.amount);
                throw new Error("Itens insuficientes");
            }
            let newItem = new SaleItem_1.SaleItem(item.stockId, item.amount);
            sales.push(newItem);
            itensDTO.push(this.itemtoDTO(newItem));
            let price = (_a = this.breadStockRepository.searchById(newItem.getBreadStockID())) === null || _a === void 0 ? void 0 : _a.getPrice();
            if (price)
                totalValue += item.amount * price;
        });
        const newSale = new BreadSale_1.BreadSale(cpf, totalValue, sales);
        this.breadSaleRepository.create(newSale);
        const saleDTO = {
            saleID: newSale.id,
            cpf: newSale.cpf,
            items: itensDTO,
            total: newSale.totalValue
        };
        return saleDTO;
    }
    findById(id) {
        console.log("oiiii");
        const sale = this.breadSaleRepository.searchById(id);
        console.log(id);
        console.log(sale);
        let itensDTO = [];
        sale === null || sale === void 0 ? void 0 : sale.items.forEach(item => {
            itensDTO.push(this.itemtoDTO(item));
        });
        if (sale) {
            const saleDTO = {
                saleID: sale === null || sale === void 0 ? void 0 : sale.id,
                cpf: sale === null || sale === void 0 ? void 0 : sale.cpf,
                items: itensDTO,
                total: sale === null || sale === void 0 ? void 0 : sale.totalValue
            };
            return saleDTO;
        }
        else {
            throw new Error("Venda não encontrada");
        }
    }
    findCustomerSells(cpf) {
        return this.breadSaleRepository.searchByCPF(cpf);
    }
    delete(id) {
        let elementToDel = this.findById(id);
        if (elementToDel)
            this.breadSaleRepository.remove(elementToDel);
        else
            throw (0, console_1.error)("Sell not found");
    }
    itemtoDTO(item) {
        let name = this.breadStockRepository.searchById(item.getBreadStockID());
        if (!name) {
            throw new Error("Na conversão de DTO id não encontrado");
        }
        console.log(name.getModality());
        const itemDTO = new ItemCreateDTO_1.ItemCreateDTO(item.getBreadStockID(), item.getAmount(), name.getModality().getName());
        return itemDTO;
    }
}
exports.BreadSaleService = BreadSaleService;
