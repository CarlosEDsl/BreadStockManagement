import { EstoquePaes } from '../model/EstoquePaes';
import { EstoquePaesService } from './../service/EstoquePaesService';
import {Request, Response} from 'express';

export class EstoquePaesController{

    private estoqueService: EstoquePaesService;

    constructor(){
        this.estoqueService = new EstoquePaesService();
    }

    async todosEstoque(res: Response): Promise<Response>{
        try{
            const todoEstoque: EstoquePaes[] = this.estoqueService.findAll();
            return res.status(200).json(todoEstoque);
        } catch (e:any) {
            return res.status(400).json(e.message);
        }
    }

    async buscarEstoque(req:Request, res:Response): Promise<Response>{
        try {
            const { id } = req.params;
            const { modalidade } = req.body;
            const estoque: EstoquePaes | undefined = this.estoqueService.find(id, modalidade);
            if(estoque) {
                return res.status(200).json(estoque);
            }
            else {
                return res.status(404).json({message: "ID e/ou Modalidade não encontrados"})
            }
        } catch (e:any) {
            return res.status(400).json(e.message);
        }

    }

    async cadastrarEstoque(req:Request, res:Response): Promise<Response>{
        try{
            const { modalidade, quantidade } = req.body;
            const novoEstoque: EstoquePaes = this.estoqueService.create({modalidade, quantidade});
            return res.status(201).json(novoEstoque);
        } catch (e:any){
            return res.status(400).json({ message: e.message});
        }
    }

    async atualizarEstoque(req:Request, res:Response): Promise<Response> {
        try {
            
            const { id } = req.params;
            const { modalidade, quantidade } = req.body;
            const estoqueAtualizado = this.estoqueService.update({ id, modalidade, quantidade });
            return res.status(200).json(estoqueAtualizado);
        } catch (e:any) {
            return res.status(400).json(e.message);
        }
    }

    async removerEstoque(req:Request, res:Response): Promise<Response>{
        try{
            const { id } = req.params;
            this.estoqueService.delete(id);
            return res.status(204).send();
        } catch(e:any) {
            return res.status(404).json({ message: e.message });
        }
    }
}