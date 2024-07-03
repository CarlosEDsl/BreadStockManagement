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
exports.BreadStockController = void 0;
const BreadStockService_1 = require("./../service/BreadStockService");
class BreadStockController {
    constructor() {
        this.stockService = new BreadStockService_1.BreadStockService();
    }
    getAllStocks(res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fullStock = this.stockService.findAll();
                return res.status(200).json(fullStock);
            }
            catch (e) {
                return res.status(400).json(e.message);
            }
        });
    }
    findStock(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { modality } = req.body;
                const stock = this.stockService.find(id, modality);
                if (stock) {
                    return res.status(200).json(stock);
                }
                else {
                    return res.status(404).json({ message: "ID e/ou Modalidade não encontrados" });
                }
            }
            catch (e) {
                return res.status(400).json(e.message);
            }
        });
    }
    createStock(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { modality, amount, price } = req.body;
                const novoEstoque = this.stockService.create({ modality, amount, price });
                return res.status(201).json(novoEstoque);
            }
            catch (e) {
                return res.status(400).json({ message: e.message });
            }
        });
    }
    updateStock(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { modality, amount, price } = req.body;
                const parsedId = parseInt(id, 10);
                const updatedStock = this.stockService.update({ id: parsedId, modality, amount, price });
                return res.status(200).json(updatedStock);
            }
            catch (e) {
                return res.status(400).json(e.message);
            }
        });
    }
    removeStock(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id } = (req.params.id) ? req.params : req.body;
                if (typeof id === 'string' && !isNaN(Number(id))) {
                    id = parseInt(id, 10);
                }
                const { modality, amount, price } = req.body;
                const stock = this.stockService.delete({ id, modality, amount, price });
                return res.status(200).json(stock);
            }
            catch (e) {
                return res.status(404).json({ message: e.message });
            }
        });
    }
}
exports.BreadStockController = BreadStockController;
