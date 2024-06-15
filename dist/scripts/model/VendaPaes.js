"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaPaes = void 0;
class VendaPaes {
    constructor(cpfCliente, valorTotal, itensComprados, id) {
        if (id) {
            this.id = id;
        }
        else {
            this.id = this.gerarId();
        }
        this.cpfCliente = cpfCliente;
        this.valorTotal = valorTotal;
        this.itensComprados = itensComprados;
    }
    gerarId() {
        return Date.now();
    }
}
exports.VendaPaes = VendaPaes;
