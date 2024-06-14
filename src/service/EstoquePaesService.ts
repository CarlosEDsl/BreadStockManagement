import { ModalidadePaesRepository } from './../repository/ModalidadePaesRepository';
import { EstoquePaes } from "../model/EstoquePaes";
import { ModalidadePaes } from "../model/ModalidadePaes";
import { EstoquePaesRepository } from "../repository/EstoquePaesRepository";
import { ModalidadePaesService } from "./ModalidadePaesService";

export class EstoquePaesService{
    estoqueRepository:EstoquePaesRepository = new EstoquePaesRepository();
    modalidadePaesService:ModalidadePaesService = new ModalidadePaesService();

    findAll(): EstoquePaes[] {
        return this.estoqueRepository.allStocks();
    }

    create(estoqueInfo:any): EstoquePaes{
        const {modalidade, quantidade} = estoqueInfo;
        if(!modalidade || !quantidade) {
            throw new Error("Entra inválida");
        }

        const estoqueEncontrado = this.find(undefined, modalidade)
            if(estoqueEncontrado){
                throw new Error("Já existe um estoque cadastrado para essa modalidade");
            }
        
        const novoEstoque = new EstoquePaes(modalidade, quantidade);
        this.estoqueRepository.createStockCount(novoEstoque);
        return novoEstoque;
    }

    find(id:any, modalidade:any):EstoquePaes|undefined{
        if(id) {
            const idNumber: number = parseInt(id);
            return this.estoqueRepository.searchById(idNumber);
        }
        if(modalidade){
            return this.estoqueRepository.searchByModalidade(modalidade);
        }
        return undefined;

    }

    delete(id:any) {
        const estoque = this.estoqueRepository.searchById(parseInt(id));
        if(!estoque){
            throw new Error("Estoque não encontrado");
        }
        this.estoqueRepository.deleteStock(estoque);
    }

    update(stockData:any): EstoquePaes {
        let {id, modalidade, quantidade} = stockData;
        if(!id || !modalidade || !quantidade){
            throw new Error("Faltam dados");
        }

        modalidade = this.modalidadePaesService.findByName(modalidade);

        if(this.estoqueRepository.searchById(id)){
            throw new Error("Estoque não encontrado");
        }
        let estoque = new EstoquePaes(modalidade, quantidade, id);
        
        this.estoqueRepository.updateStock(modalidade);
        return estoque;
    }


}