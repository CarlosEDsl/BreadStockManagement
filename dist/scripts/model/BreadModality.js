"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadModality = void 0;
const IdGenerator_1 = require("../utils/IdGenerator");
class BreadModality {
    constructor(nome, vegano) {
        this.name = nome;
        this.vegan = vegano;
        this.id = this.generateID();
    }
    generateID() {
        return IdGenerator_1.IdGenerator.getNextID("Modality");
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    isVegan() {
        return this.vegan;
    }
    setIsVegan(vegan) {
        this.vegan = vegan;
    }
}
exports.BreadModality = BreadModality;
