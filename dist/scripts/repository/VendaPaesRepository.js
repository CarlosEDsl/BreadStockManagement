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
        return venda;
    }
    searchById(id) {
        return this.vendaPaesRepository.find(VendaPaes => VendaPaes.id);
    }
    searchByCPF(cpf) {
        if (this.vendaPaesRepository.find(VendaPaes => VendaPaes.cpfCliente)) {
            let sells = [];
            for (let i = 0; i < this.vendaPaesRepository.length; i++) {
                sells.push(this.vendaPaesRepository[i]);
            }
            ;
            return sells;
        }
        return undefined;
    }
}
exports.VendaPaesRepository = VendaPaesRepository;
