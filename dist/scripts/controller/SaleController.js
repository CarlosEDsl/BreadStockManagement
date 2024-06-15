"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleController = void 0;
const VendaPaesService_1 = require("../service/VendaPaesService");
class SaleController {
    constructor() {
        this.vendaPaesService = new VendaPaesService_1.VendaPaesService();
    }
    //cpfCliente:number;
    //valorTotal:number;
    //itensComprados:Array<ItemVenda>;
    createSale(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { cpf, saleItems } = req.body;
                const sell = this.vendaPaesService.create({ cpf, saleItems });
                return res.status(201).json(sell);
            }
            catch (e) {
                return res.status(400).json(e.message);
            }
        });
    }
}
exports.SaleController = SaleController;
