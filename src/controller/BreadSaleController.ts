import { BreadSaleService } from "../service/BreadSaleService";
import { Request, Response } from 'express';
export class BreadSaleController {
w
    private breadSaleService = new BreadSaleService();
    
    async createSale(req:Request, res:Response) {
        try {
            const { cpf, saleItems }: {cpf:number, saleItems:any[]} = req.body;

            const sale = this.breadSaleService.create({cpf, saleItems});

            return res.status(201).json(sale);
        } catch (e:any) {
            return res.status(400).json(e.message);
        }
    }

    async findSale(req:Request, res:Response){
        try{
            let { id } = req.body;
            console.log(id);
            if(!id) id = req.params;
            console.log(typeof(id))

            const sale = this.breadSaleService.findById(id);
            console.log(sale)
            return res.status(200).json(sale);
        } catch(e:any){
            return res.status(404).json(e.message);
        }
    }

}