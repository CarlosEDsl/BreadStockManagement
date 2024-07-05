import { BreadModality } from '../model/BreadModality';
import { BreadModalityRepository } from "../repository/BreadModalityRepository";

export class BreadModalityService{
    breadModalityRepository:BreadModalityRepository;

    constructor(){
        this.breadModalityRepository = BreadModalityRepository.getInstance();
    }

    create(name:string, vegan:boolean=false): BreadModality{
        if(!name){
            throw new Error("Dados insuficientes");
        }
        if(this.breadModalityRepository.searchByName(name)){
            throw new Error("Já existe uma modalidade com esse nome")
        }
        let modality = new BreadModality(name, vegan);
        this.breadModalityRepository.create(modality);
        return modality;
    }

    findId(id:number) {
        const modality = this.breadModalityRepository.searchById(id);
        if(!modality)
            throw new Error("Modalidade não encontrada");
        return modality;
    }

    findByName(name:string) {
        const modality = this.breadModalityRepository.searchByName(name);
        if(!modality)
            throw new Error("Modalidade não encontrada");
        return modality;
    }

    getAll(): BreadModality[] {
        return this.breadModalityRepository.allModalities();
    }

    update(id:number, name?:string, vegan?:boolean) {
        const modality = this.breadModalityRepository.searchById(id);
        if(!modality){
            throw new Error("Essa modalidade não está cadastrada");
        }
        let newModality = modality;
        if (name !== undefined) newModality.setName(name);
        if (vegan !== undefined) newModality.setIsVegan(vegan);

        return this.breadModalityRepository.update(newModality);
        
    }

    delete(id:number, name:string, vegan:boolean) {
        let modality = this.breadModalityRepository.searchById(id);

        if(modality?.getName() != name || modality.isVegan() != vegan){
            console.log(name, vegan, id, modality)
            throw new Error("Dados divergentes na requisição");
        }

        if (!modality)
            throw new Error("Modalidade não encontrada");
        this.breadModalityRepository.delete(modality);
    }

}