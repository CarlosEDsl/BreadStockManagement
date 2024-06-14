import { ModalidadePaes } from "../model/ModalidadePaes";
import { ModalidadePaesService } from "../service/ModalidadePaesService";
import { Request, Response } from 'express';

export class ModalidadePaesController{

    private modalidadeService = new ModalidadePaesService();

    async getAllModalities(res:Response) {
        try {
            const allModalities:ModalidadePaes[] = this.modalidadeService.getAll();
            return res.status(200).json(allModalities);
        } catch(e:any) {
            return res.status(404).json(e.message);
        }
    }

    async createModality(req:Request, res:Response) {
        try {
            const { name, price, vegan } = req.body;
            const modality:ModalidadePaes = this.modalidadeService.create(name, price, vegan)
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
                const modality = this.modalidadeService.findId(parseInt(id));
                return res.status(200).json(modality);
            } else {
                const modality = this.modalidadeService.findByName(name);
                return res.status(200).json(modality);
            }
        } catch (e:any) {
            return res.status(404).json(e.message);
        }
    }

    async updateModality(req:Request, res:Response) {
        try {
            const { id } = req.params;
            const { name, price, vegan } = req.body;
            if(!this.modalidadeService.findId(parseInt(id))) {
                throw new Error("Modalidade não existe")
            }
            const modality = this.modalidadeService.update(parseInt(id), name, price, vegan);
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
                this.modalidadeService.delete(this.modalidadeService.findByName(name).getId());
            else
                this.modalidadeService.delete(parseInt(id));
            
            
                
            return res.status(204).send();
        } catch(e:any) {
            return res. status(404).json(e.message)
        }
    }

}