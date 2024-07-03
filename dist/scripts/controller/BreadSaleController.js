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
exports.BreadSaleController = void 0;
const BreadSaleService_1 = require("../service/BreadSaleService");
class BreadSaleController {
    constructor() {
        this.breadSaleService = new BreadSaleService_1.BreadSaleService();
    }
    createSale(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { cpf, saleItems } = req.body;
                const sale = this.breadSaleService.create({ cpf, saleItems });
                return res.status(201).json(sale);
            }
            catch (e) {
                return res.status(400).json(e.message);
            }
        });
    }
    findSale(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id } = req.body;
                console.log(id);
                if (!id)
                    id = req.params;
                console.log(typeof (id));
                const sale = this.breadSaleService.findById(id);
                console.log(sale);
                return res.status(200).json(sale);
            }
            catch (e) {
                return res.status(404).json(e.message);
            }
        });
    }
}
exports.BreadSaleController = BreadSaleController;
