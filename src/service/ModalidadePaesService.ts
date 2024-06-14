import { ModalidadePaes } from './../model/ModalidadePaes';
import { ModalidadePaesRepository } from "../repository/ModalidadePaesRepository";

export class ModalidadePaesService{
    modalidadePaesRepository = new ModalidadePaesRepository();

    create(nome:string, preco:number, vegano:boolean=false): ModalidadePaes{
        if(!nome || !preco){
            throw new Error("Dados insuficientes");
        }
        let modalidade = new ModalidadePaes(nome, preco, vegano);
        this.modalidadePaesRepository.create(modalidade);
        return modalidade;
    }

    findId(id:number) {
        const modalidade = this.modalidadePaesRepository.searchById(id);
        if(!modalidade)
            throw new Error("Modalidade não encontrada");
        return modalidade;
    }

    findByName(name:string) {
        const modalidade = this.modalidadePaesRepository.searchByName(name);
        if(!modalidade)
            throw new Error("Modalidade não encontrada");
        return modalidade;
    }

    getAll(): ModalidadePaes[] {
        return this.modalidadePaesRepository.allModalities();
    }

    update(id:number, name?:string, price?:number, vegan?:boolean) {
        const modality = this.modalidadePaesRepository.searchById(id);
        if(!modality){
            throw new Error("Essa modalidade não está cadastrada");
        }
        let newModality = modality;
        if (name !== undefined) newModality.setName(name);
        if (price !== undefined) newModality.setPrice(price);
        if (vegan !== undefined) newModality.setIsVegan(vegan);

        return this.modalidadePaesRepository.update(newModality);
        
    }

    delete(id:number) {
        let modalidade = this.modalidadePaesRepository.searchById(id);
        if (!modalidade)
            throw new Error("Modalidade não encontrada");
        this.modalidadePaesRepository.delete(modalidade);
    }

}