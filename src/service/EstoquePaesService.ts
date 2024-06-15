import { ModalidadePaesRepository } from './../repository/ModalidadePaesRepository';
import { EstoquePaes } from "../model/EstoquePaes";
import { EstoquePaesRepository } from "../repository/EstoquePaesRepository";
import { ModalidadePaes } from '../model/ModalidadePaes';

export class EstoquePaesService{
    estoqueRepository:EstoquePaesRepository;
    modalidadePaesRepository:ModalidadePaesRepository;

    constructor(){
        this.estoqueRepository = EstoquePaesRepository.getInstance();
        this.modalidadePaesRepository = ModalidadePaesRepository.getInstance();
    }

    findAll(): EstoquePaes[] {
        return this.estoqueRepository.allStocks();
    }

    create(estoqueInfo:any): EstoquePaes{
        const {modalidade, quantidade, price} = estoqueInfo;
        if(!modalidade || !quantidade) {
            throw new Error("Entra inválida");
        }

        const estoqueEncontrado = this.find(undefined, modalidade)
            if(estoqueEncontrado){
                throw new Error("Já existe um estoque cadastrado para essa modalidade");
            }

        const breadModality:ModalidadePaes|undefined = this.modalidadePaesRepository.searchById(modalidade);
        if(!breadModality) {
            throw new Error("Essa modalidade não existe");
        }
        const novoEstoque = new EstoquePaes(breadModality, quantidade, price);
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
        let {id, modalidade, quantidade, price} = stockData;
        if(!id || !modalidade || !quantidade || !stockData){
            throw new Error("Faltam dados");
        }

        modalidade = this.modalidadePaesRepository.searchById(modalidade);

        if(this.estoqueRepository.searchById(id)){
            throw new Error("Estoque não encontrado");
        }
        let estoque = new EstoquePaes(modalidade, quantidade, price, id);
        
        this.estoqueRepository.updateStock(modalidade);
        return estoque;
    }


}