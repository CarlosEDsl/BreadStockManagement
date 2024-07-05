import { BreadModality } from "../model/BreadModality";
import { BreadModalityService } from "../service/BreadModalityService";
import { Request, Response } from 'express';

export class BreadModalityController{

    private modalityService = new BreadModalityService();

    async getAllModalities(res:Response): Promise<Response> {
        try {
            const allModalities:BreadModality[] = this.modalityService.getAll();
            return res.status(200).json(allModalities);
        } catch(e:any) {
            return res.status(404).json(e.message);
        }
    }

    async createModality(req:Request, res:Response): Promise<Response> {
        try {
            const { name, vegan } = req.body;
            const modality:BreadModality = this.modalityService.create(name, vegan)
            return res.status(201).json(modality);
        } catch (e:any) {
            return res.status(400).json(e.message)
        }
    }

    async searchModality(req:Request, res:Response): Promise<Response> {
        try {
            let { id } = (req.params.id) ? req.params : req.body;
            if (typeof id === 'string' && !isNaN(Number(id))) {
                id = parseInt(id, 10);
            }
            const { name } = req.body;

            if(id) {
                const modality = this.modalityService.findId(id);
                return res.status(200).json(modality);
            } else {
                const modality = this.modalityService.findByName(name);
                return res.status(200).json(modality);
            }
        } catch (e:any) {
            return res.status(404).json(e.message);
        }
    }

    async updateModality(req:Request, res:Response): Promise<Response> {
        try {
            let { id } = (req.params.id) ? req.params : req.body;
            if (typeof id === 'string' && !isNaN(Number(id))) {
                id = parseInt(id, 10);
            }
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

    async deleteModality(req:Request, res:Response): Promise<Response>{
        try {
            const { id, name, vegan } = req.body;
            this.modalityService.delete(parseInt(id), name, vegan);
                
            return res.status(202).send();
        } catch(e:any) {
            return res. status(400).json(e.message)
        }
    }

}