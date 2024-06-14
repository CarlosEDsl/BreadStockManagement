"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaPaes = void 0;
class VendaPaes {
    constructor(id, cpfCliente, valorTotal, itensComprados) {
        this.id = this.gerarId();
        this.cpfCliente = cpfCliente;
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
    }
    gerarId() {
        return Date.now();
    }
}
exports.VendaPaes = VendaPaes;
