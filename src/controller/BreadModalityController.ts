import { BreadModality } from "../model/BreadModality";
import { BreadModalityService } from "../service/BreadModalityService";
import { Request, Response } from 'express';

export class BreadModalityController{

    private modalityService = new BreadModalityService();

    async getAllModalities(res:Response) {
        try {
            const allModalities:BreadModality[] = this.modalityService.getAll();
            return res.status(200).json(allModalities);
        } catch(e:any) {
            return res.status(404).json(e.message);
        }
    }

    async createModality(req:Request, res:Response) {
        try {
            const { name, vegan } = req.body;
            const modality:BreadModality = this.modalityService.create(name, vegan)
            return res.status(201).json(modality);
        } catch (e:any) {
            return res.status(400).json(e.message)
        }
    }

    async searchModality(req:Request, res:Response) {
        try {
            const { id } = req.params;
            const { name } = req.body;
            if(id) {
                const modality = this.modalityService.findId(parseInt(id));
                return res.status(200).json(modality);
            } else {
                const modality = this.modalityService.findByName(name);
                return res.status(200).json(modality);
            }
        } catch (e:any) {
            return res.status(404).json(e.message);
        }
    }

    async updateModality(req:Request, res:Response) {
        try {
            const { id } = req.params;
            const { name, vegan } = req.body;
            if(!this.modalityService.findId(parseInt(id))) {
                throw new Error("Modalidade não existe")
            }
            const modality = this.modalityService.update(parseInt(id), name, vegan);
            return res.status(200).json(modality);
        } catch (e:any) {
            return res.status(404).json(e.message)
        }
    }

    async deleteModality(req:Request, res:Response){
        try {
            const { id } = req.params;
            const { name } = req.body;
            if(!id)
                this.modalityService.delete(this.modalityService.findByName(name).getId());
            else
                this.modalityService.delete(parseInt(id));
            
            
                
            return res.status(204).send();
        } catch(e:any) {
            return res. status(404).json(e.message)
        }
    }

}