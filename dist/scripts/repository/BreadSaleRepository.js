"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadSaleRepository = void 0;
class BreadSaleRepository {
    constructor() {
        this.breadSaleRepository = [];
    }
    create(sale) {
        const success = this.breadSaleRepository.push(sale);
    }
    remove(sale) {
        const index = this.breadSaleRepository.indexOf(sale);
        if (index !== -1) {
            this.breadSaleRepository.splice(index);
        }
    }
    update(sale) {
        const index = this.breadSaleRepository.indexOf(sale);
        if (index !== -1) {
            this.breadSaleRepository[index] = sale;
        }
        return sale;
    }
    searchById(id) {
        return this.breadSaleRepository.find(breadSale => breadSale.id === id);
    }
    searchByCPF(cpf) {
        if (this.breadSaleRepository.find(breadSale => breadSale.cpf)) {
            let sales = [];
            for (let i = 0; i < this.breadSaleRepository.length; i++) {
                sales.push(this.breadSaleRepository[i]);
            }
            ;
            return sales;
        }
        return undefined;
    }
}
exports.BreadSaleRepository = BreadSaleRepository;
