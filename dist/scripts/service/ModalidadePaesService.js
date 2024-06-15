"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadePaesService = void 0;
const ModalidadePaes_1 = require("./../model/ModalidadePaes");
const ModalidadePaesRepository_1 = require("../repository/ModalidadePaesRepository");
class ModalidadePaesService {
    constructor() {
        this.modalidadePaesRepository = new ModalidadePaesRepository_1.ModalidadePaesRepository();
    }
    create(nome, preco, vegano = false) {
        if (!nome || !preco) {
            throw new Error("Dados insuficientes");
        }
        let modalidade = new ModalidadePaes_1.ModalidadePaes(nome, preco, vegano);
        this.modalidadePaesRepository.create(modalidade);
        return modalidade;
    }
    findId(id) {
        const modalidade = this.modalidadePaesRepository.searchById(id);
        if (!modalidade)
            throw new Error("Modalidade não encontrada");
        return modalidade;
    }
    findByName(name) {
        const modalidade = this.modalidadePaesRepository.searchByName(name);
        if (!modalidade)
            throw new Error("Modalidade não encontrada");
        return modalidade;
    }
    getAll() {
        return this.modalidadePaesRepository.allModalities();
    }
    update(id, name, price, vegan) {
        const modality = this.modalidadePaesRepository.searchById(id);
        if (!modality) {
            throw new Error("Essa modalidade não está cadastrada");
        }
        let newModality = modality;
        if (name !== undefined)
            newModality.setName(name);
        if (price !== undefined)
            newModality.setPrice(price);
        if (vegan !== undefined)
            newModality.setIsVegan(vegan);
        return this.modalidadePaesRepository.update(newModality);
    }
    delete(id) {
        let modalidade = this.modalidadePaesRepository.searchById(id);
        if (!modalidade)
            throw new Error("Modalidade não encontrada");
        this.modalidadePaesRepository.delete(modalidade);
    }
}
exports.ModalidadePaesService = ModalidadePaesService;
