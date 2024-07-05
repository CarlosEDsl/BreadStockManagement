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
exports.BreadModalityController = void 0;
const BreadModalityService_1 = require("../service/BreadModalityService");
class BreadModalityController {
    constructor() {
        this.modalityService = new BreadModalityService_1.BreadModalityService();
    }
    getAllModalities(res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allModalities = this.modalityService.getAll();
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
                const { name, vegan } = req.body;
                const modality = this.modalityService.create(name, vegan);
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
                let { id } = (req.params.id) ? req.params : req.body;
                if (typeof id === 'string' && !isNaN(Number(id))) {
                    id = parseInt(id, 10);
                }
                const { name } = req.body;
                if (id) {
                    const modality = this.modalityService.findId(id);
                    return res.status(200).json(modality);
                }
                else {
                    const modality = this.modalityService.findByName(name);
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
                let { id } = (req.params.id) ? req.params : req.body;
                if (typeof id === 'string' && !isNaN(Number(id))) {
                    id = parseInt(id, 10);
                }
                const { name, vegan } = req.body;
                if (!this.modalityService.findId(parseInt(id))) {
                    throw new Error("Modalidade não existe");
                }
                const modality = this.modalityService.update(parseInt(id), name, vegan);
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
                const { id, name, vegan } = req.body;
                this.modalityService.delete(parseInt(id), name, vegan);
                return res.status(202).send();
            }
            catch (e) {
                return res.status(400).json(e.message);
            }
        });
    }
}
exports.BreadModalityController = BreadModalityController;
