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
exports.EstoquePaesController = void 0;
const EstoquePaesService_1 = require("./../service/EstoquePaesService");
class EstoquePaesController {
    constructor() {
        this.estoqueService = new EstoquePaesService_1.EstoquePaesService();
    }
    todosEstoque(res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todoEstoque = this.estoqueService.findAll();
                return res.status(201).json(todoEstoque);
            }
            catch (e) {
                return res.status(400).json(e.message);
            }
        });
    }
    buscarEstoque(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, modalidade } = req.query;
                const estoque = this.estoqueService.find(id, modalidade);
                if (estoque) {
                    return res.status(200).json(estoque);
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
    cadastrarEstoque(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { modalidade, quantidade } = req.body;
                const novoEstoque = this.estoqueService.create({ modalidade, quantidade });
                return res.status(201).json(novoEstoque);
            }
            catch (e) {
                return res.status(400).json({ message: e.message });
            }
        });
    }
    atualizarEstoque(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, modalidade, quantidade } = req.body;
                const estoqueAtualizado = this.estoqueService.update({ id, modalidade, quantidade });
                return res.status(200).json(estoqueAtualizado);
            }
            catch (e) {
                return res.status(400).json(e.message);
            }
        });
    }
    removerEstoque(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params;
                this.estoqueService.delete(id);
                return res.status(204).send();
            }
            catch (e) {
                return res.status(404).json({ message: e.message });
            }
        });
    }
}
exports.EstoquePaesController = EstoquePaesController;
