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
exports.ModalidadePaesController = void 0;
const ModalidadePaesService_1 = require("../service/ModalidadePaesService");
class ModalidadePaesController {
    constructor() {
        this.modalidadeService = new ModalidadePaesService_1.ModalidadePaesService();
    }
    getAllModalities(res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allModalities = this.modalidadeService.getAll();
                return res.status(200).json(allModalities);
            }
            catch (e) {
                return res.status(404).json(e.message);
            }
        });
    }
    createModality(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, price, vegan } = req.body;
                const modality = this.modalidadeService.create(name, price, vegan);
                return res.status(201).json(modality);
            }
            catch (e) {
                return res.status(400).json(e.message);
            }
        });
    }
    searchModality(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name } = req.body;
                if (id) {
                    const modality = this.modalidadeService.findId(parseInt(id));
                    return res.status(200).json(modality);
                }
                else {
                    const modality = this.modalidadeService.findByName(name);
                    return res.status(200).json(modality);
                }
            }
            catch (e) {
                return res.status(404).json(e.message);
            }
        });
    }
    updateModality(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name, price, vegan } = req.body;
                if (!this.modalidadeService.findId(parseInt(id))) {
                    throw new Error("Modalidade não existe");
                }
                const modality = this.modalidadeService.update(parseInt(id), name, price, vegan);
                return res.status(200).json(modality);
            }
            catch (e) {
                return res.status(404).json(e.message);
            }
        });
    }
    deleteModality(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name } = req.body;
                if (!id)
                    this.modalidadeService.delete(this.modalidadeService.findByName(name).getId());
                else
                    this.modalidadeService.delete(parseInt(id));
                return res.status(204).send();
            }
            catch (e) {
                return res.status(404).json(e.message);
            }
        });
    }
}
exports.ModalidadePaesController = ModalidadePaesController;
