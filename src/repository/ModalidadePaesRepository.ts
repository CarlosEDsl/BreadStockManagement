import { ModalidadePaes } from "../model/ModalidadePaes";

export class ModalidadePaesRepository {
    modalidadePaes:ModalidadePaes[] = [];

    allModalities():ModalidadePaes[] {
        return this.modalidadePaes;
    }

    create(modalidade:ModalidadePaes) {
        this.modalidadePaes.push(modalidade);
    }
    delete(modalidade:ModalidadePaes) {
        const index = this.modalidadePaes.indexOf(modalidade);
        if(index !== -1) {
            this.modalidadePaes.splice(index);
        }
    }
    update(modalidade:ModalidadePaes):ModalidadePaes {
        const index = this.modalidadePaes.indexOf(modalidade);
        if(index !== -1) {
            this.modalidadePaes[index] = modalidade;
        }
        return this.modalidadePaes[index];
    }

    searchById(id:number):ModalidadePaes|undefined{
        return this.modalidadePaes.find(ModalidadePaes => ModalidadePaes.getId() === id);
    }

    searchByName(name:string):ModalidadePaes|undefined {
        return this.modalidadePaes.find(ModalidadePaes => ModalidadePaes.getName().toUpperCase() == name.toUpperCase());
    }
}