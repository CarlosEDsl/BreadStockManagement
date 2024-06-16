import { ModalidadePaes } from "../model/ModalidadePaes";

export class ModalidadePaesRepository {
    private static instance: ModalidadePaesRepository;
    modalityList:ModalidadePaes[];

    constructor() {
        this.modalityList = [];
    }

    public static getInstance():ModalidadePaesRepository{
        if(!ModalidadePaesRepository.instance){
            ModalidadePaesRepository.instance = new ModalidadePaesRepository();
        }
        return ModalidadePaesRepository.instance;
    }

    allModalities():ModalidadePaes[] {
        return this.modalityList;
    }

    create(modalidade:ModalidadePaes) {
        this.modalityList.push(modalidade);
    }
    delete(modalidade:ModalidadePaes) {
        const index = this.modalityList.indexOf(modalidade);
        if(index !== -1) {
            this.modalityList.splice(index);
        }
    }
    update(modalidade:ModalidadePaes):ModalidadePaes {
        const index = this.modalityList.indexOf(modalidade);
        if(index !== -1) {
            this.modalityList[index] = modalidade;
        }
        return this.modalityList[index];
    }

    searchById(id:number):ModalidadePaes|undefined{
        return this.modalityList.find(ModalidadePaes => ModalidadePaes.getId() === id);
    }

    searchByName(name:string):ModalidadePaes|undefined {
        return this.modalityList.find(ModalidadePaes => ModalidadePaes.getName().toUpperCase() === name.toUpperCase());
    }
}