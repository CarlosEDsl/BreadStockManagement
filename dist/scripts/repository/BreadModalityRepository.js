"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadModalityRepository = void 0;
class BreadModalityRepository {
    constructor() {
        this.modalityList = [];
    }
    static getInstance() {
        if (!BreadModalityRepository.instance) {
            BreadModalityRepository.instance = new BreadModalityRepository();
        }
        return BreadModalityRepository.instance;
    }
    allModalities() {
        return this.modalityList;
    }
    create(modality) {
        this.modalityList.push(modality);
    }
    delete(modality) {
        const index = this.modalityList.indexOf(modality);
        if (index !== -1) {
            this.modalityList.splice(index);
        }
    }
    update(modality) {
        const index = this.modalityList.indexOf(modality);
        if (index !== -1) {
            this.modalityList[index] = modality;
        }
        return this.modalityList[index];
    }
    searchById(id) {
        return this.modalityList.find(BreadModality => BreadModality.getId() === id);
    }
    searchByName(name) {
        return this.modalityList.find(BreadModality => BreadModality.getName().toUpperCase() === name.toUpperCase());
    }
}
exports.BreadModalityRepository = BreadModalityRepository;
