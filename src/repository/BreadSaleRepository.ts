import { BreadSale } from "../model/BreadSale";

export class BreadSaleRepository {
    breadSaleRepository:BreadSale[] = [];

    create(sale:BreadSale) {
        this.breadSaleRepository.push(sale);
    }
    remove(sale:BreadSale){
        const index = this.breadSaleRepository.indexOf(sale);
        if(index !== -1){
            this.breadSaleRepository.splice(index);
        }
    }
    update(sale:BreadSale){
        const index = this.breadSaleRepository.indexOf(sale);
        if(index !== -1){
            this.breadSaleRepository[index] = sale;
        }
        return sale;
    }
    
    searchById(id:number):BreadSale|undefined{
        return this.breadSaleRepository.find(breadSale => breadSale.id);
    }
    searchByCPF(cpf:number):BreadSale[]|undefined{
        if(this.breadSaleRepository.find(breadSale => breadSale.cpf)) {
            let sales:BreadSale[] = [];
            for(let i=0; i < this.breadSaleRepository.length; i++) {
                sales.push(this.breadSaleRepository[i]);
            };
            return sales;
        }
        return undefined;
    }
}