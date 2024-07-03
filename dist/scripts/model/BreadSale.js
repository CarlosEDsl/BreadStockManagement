"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadSale = void 0;
const IdGenerator_1 = require("../utils/IdGenerator");
class BreadSale {
    constructor(cpf, totalValue, items, id) {
        if (id !== undefined) {
            this._id = id;
        }
        else {
            this._id = this.generateID();
        }
        this._cpf = cpf;
        this._totalValue = totalValue;
        this._items = items;
    }
    generateID() {
        return IdGenerator_1.IdGenerator.getNextID("Sale");
    }
    get id() {
        return this._id;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(value) {
        this._cpf = value;
    }
    get totalValue() {
        return this._totalValue;
    }
    set totalValue(value) {
        this._totalValue = value;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
}
exports.BreadSale = BreadSale;
