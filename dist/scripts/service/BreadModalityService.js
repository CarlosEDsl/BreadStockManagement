"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadModalityService = void 0;
const BreadModality_1 = require("../model/BreadModality");
const BreadModalityRepository_1 = require("../repository/BreadModalityRepository");
class BreadModalityService {
    constructor() {
        this.breadModalityRepository = BreadModalityRepository_1.BreadModalityRepository.getInstance();
    }
    create(name, vegan = false) {
        if (!name) {
            throw new Error("Dados insuficientes");
        }
        if (this.breadModalityRepository.searchByName(name)) {
            throw new Error("Já existe uma modalidade com esse nome");
        }
        let modality = new BreadModality_1.BreadModality(name, vegan);
        this.breadModalityRepository.create(modality);
        return modality;
    }
    findId(id) {
        const modality = this.breadModalityRepository.searchById(id);
        if (!modality)
            throw new Error("Modalidade não encontrada");
        return modality;
    }
    findByName(name) {
        const modality = this.breadModalityRepository.searchByName(name);
        if (!modality)
            throw new Error("Modalidade não encontrada");
        return modality;
    }
    getAll() {
        return this.breadModalityRepository.allModalities();
    }
    update(id, name, vegan) {
        const modality = this.breadModalityRepository.searchById(id);
        if (!modality) {
            throw new Error("Essa modalidade não está cadastrada");
        }
        let newModality = modality;
        if (name !== undefined)
            newModality.setName(name);
        if (vegan !== undefined)
            newModality.setIsVegan(vegan);
        return this.breadModalityRepository.update(newModality);
    }
    delete(id, name, vegan) {
        let modality = this.breadModalityRepository.searchById(id);
        if ((modality === null || modality === void 0 ? void 0 : modality.getName()) != name || modality.isVegan() != vegan) {
            console.log(name, vegan, id, modality);
            throw new Error("Dados divergentes na requisição");
        }
        if (!modality)
            throw new Error("Modalidade não encontrada");
        this.breadModalityRepository.delete(modality);
    }
}
exports.BreadModalityService = BreadModalityService;
