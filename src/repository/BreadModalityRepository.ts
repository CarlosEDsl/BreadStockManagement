import { BreadModality } from "../model/BreadModality";

export class BreadModalityRepository {
    private static instance: BreadModalityRepository;
    modalityList:BreadModality[];

    constructor() {
        this.modalityList = [];
    }

    public static getInstance():BreadModalityRepository{
        if(!BreadModalityRepository.instance){
            BreadModalityRepository.instance = new BreadModalityRepository();
        }
        return BreadModalityRepository.instance;
    }

    allModalities():BreadModality[] {
        return this.modalityList;
    }

    create(modality:BreadModality) {
        this.modalityList.push(modality);
    }
    delete(modality:BreadModality) {
        const index = this.modalityList.indexOf(modality);
        if(index !== -1) {
            this.modalityList.splice(index);
        }
    }
    update(modality:BreadModality):BreadModality {
        const index = this.modalityList.indexOf(modality);
        if(index !== -1) {
            this.modalityList[index] = modality;
        }
        return this.modalityList[index];
    }

    searchById(id:number):BreadModality|undefined{
        return this.modalityList.find(BreadModality => BreadModality.getId() === id);
    }

    searchByName(name:string):BreadModality|undefined {
        return this.modalityList.find(BreadModality => BreadModality.getName().toUpperCase() === name.toUpperCase());
    }
}