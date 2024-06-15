"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadePaesRepository = void 0;
class ModalidadePaesRepository {
    constructor() {
        this.modalidadePaes = [];
    }
    allModalities() {
        return this.modalidadePaes;
    }
    create(modalidade) {
        this.modalidadePaes.push(modalidade);
    }
    delete(modalidade) {
        const index = this.modalidadePaes.indexOf(modalidade);
        if (index !== -1) {
            this.modalidadePaes.splice(index);
        }
    }
    update(modalidade) {
        const index = this.modalidadePaes.indexOf(modalidade);
        if (index !== -1) {
            this.modalidadePaes[index] = modalidade;
        }
        return this.modalidadePaes[index];
    }
    searchById(id) {
        return this.modalidadePaes.find(ModalidadePaes => ModalidadePaes.getId() === id);
    }
    searchByName(name) {
        return this.modalidadePaes.find(ModalidadePaes => ModalidadePaes.getName().toUpperCase() == name.toUpperCase());
    }
}
exports.ModalidadePaesRepository = ModalidadePaesRepository;
