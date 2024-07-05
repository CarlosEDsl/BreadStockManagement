import { BreadStockService } from './../service/BreadStockService';
import { BreadStock } from '../model/BreadStock';
import {Request, Response} from 'express';

export class BreadStockController{

    private stockService: BreadStockService;

    constructor(){
        this.stockService = new BreadStockService();
    }

    async getAllStocks(res: Response): Promise<Response>{
        try{
            const fullStock: BreadStock[] = this.stockService.findAll();
            return res.status(200).json(fullStock);
        } catch (e:any) {
            return res.status(400).json(e.message);
        }
    }

    async findStock(req:Request, res:Response): Promise<Response>{
        try {
            const { id } = req.params;
            const { modality } = req.body;
            const stock: BreadStock | undefined = this.stockService.find(id, modality);
            if(stock) {
                return res.status(200).json(stock);
            }
            else {
                return res.status(404).json({message: "ID e/ou Modalidade não encontrados"})
            }
        } catch (e:any) {
            return res.status(400).json(e.message);
        }

    }

    async createStock(req:Request, res:Response): Promise<Response>{
        try{
            const { modality, amount, price } = req.body;
            const novoEstoque: BreadStock = this.stockService.create({modality, amount, price});
            return res.status(201).json(novoEstoque);
        } catch (e:any){
            return res.status(400).json({ message: e.message});
        }
    }

    async updateStock(req:Request, res:Response): Promise<Response> {
        try {
            const { id, modality, amount, price } = req.body;

            const updatedStock = this.stockService.update({ id, modality, amount, price });            
            return res.status(200).json(updatedStock);
        } catch (e:any) {
            return res.status(400).json(e.message);
        }
    }

    async removeStock(req:Request, res:Response): Promise<Response>{
        try{
            let { id } = (req.params.id) ? req.params : req.body;
            if (typeof id === 'string' && !isNaN(Number(id))) {
                id = parseInt(id, 10);
            }
            const { modality, amount, price } = req.body;

            const stock = this.stockService.delete({ id, modality, amount, price });
            return res.status(200).json(stock);
        } catch(e:any) {
            return res.status(404).json({ message: e.message });
        }
    }
}