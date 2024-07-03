"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadStock = void 0;
const IdGenerator_1 = require("../utils/IdGenerator");
class BreadStock {
    constructor(modality, amount, price, id) {
        this.modality = modality;
        this.amount = amount;
        this.price = price;
        if (id) {
            this.id = id;
        }
        else {
            this.id = this.generateID();
        }
    }
    generateID() {
        return IdGenerator_1.IdGenerator.getNextID("Stock");
    }
    getId() {
        return this.id;
    }
    getModality() {
        return this.modality;
    }
    setModality(modalide) {
        this.modality = modalide;
    }
    getAmount() {
        return this.amount;
    }
    setAmount(quantidade) {
        this.amount = quantidade;
    }
    setPrice(price) {
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
exports.BreadStock = BreadStock;
