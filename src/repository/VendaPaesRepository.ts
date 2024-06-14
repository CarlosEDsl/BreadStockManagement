import { VendaPaes } from "../model/VendaPaes";

export class VendaPaesRepository {
    vendaPaesRepository:VendaPaes[] = [];

    create(venda:VendaPaes) {
        this.vendaPaesRepository.push(venda);
    }
    remove(venda:VendaPaes){
        const index = this.vendaPaesRepository.indexOf(venda);
        if(index !== -1){
            this.vendaPaesRepository.splice(index);
        }
    }
    update(venda:VendaPaes){
        const index = this.vendaPaesRepository.indexOf(venda);
        if(index !== -1){
            this.vendaPaesRepository[index] = venda;
        }
        return venda;
    }
    
    searchById(id:number):VendaPaes|undefined{
        return this.vendaPaesRepository.find(VendaPaes => VendaPaes.id);
    }
    searchByCPF(cpf:number):VendaPaes[]|undefined{
        if(this.vendaPaesRepository.find(VendaPaes => VendaPaes.cpfCliente)) {
            let sells:VendaPaes[] = [];
            for(let i=0; i < this.vendaPaesRepository.length; i++) {
                sells.push(this.vendaPaesRepository[i]);
            };
            return sells;
        }
        return undefined;
    }
}