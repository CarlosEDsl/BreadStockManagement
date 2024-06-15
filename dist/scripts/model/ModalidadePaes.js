"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadePaes = void 0;
class ModalidadePaes {
    constructor(nome, preco, vegano) {
        this.name = nome;
        this.price = preco;
        this.vegan = vegano;
        this.id = this.gerarId();
    }
    gerarId() {
        return Date.now();
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
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    isVegan() {
        return this.vegan;
    }
    setIsVegan(vegan) {
        this.vegan = vegan;
    }
}
exports.ModalidadePaes = ModalidadePaes;
