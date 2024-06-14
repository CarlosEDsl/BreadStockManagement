"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaPaesRepository = void 0;
class VendaPaesRepository {
    constructor() {
        this.vendaPaesRepository = [];
    }
    create(venda) {
        this.vendaPaesRepository.push(venda);
    }
    remove(venda) {
        const index = this.vendaPaesRepository.indexOf(venda);
        if (index !== -1) {
            this.vendaPaesRepository.splice(index);
        }
    }
    update(venda) {
        const index = this.vendaPaesRepository.indexOf(venda);
        if (index !== -1) {
            this.vendaPaesRepository[index] = venda;
        }
    }
    searchById(id) {
        return this.vendaPaesRepository.find(VendaPaes => VendaPaes.id);
    }
    searchByCPF(id) {
        return this.vendaPaesRepository.find(VendaPaes => VendaPaes.cpfCliente);
    }
}
exports.VendaPaesRepository = VendaPaesRepository;
