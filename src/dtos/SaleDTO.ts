import { ItemCreateDTO } from "./ItemCreateDTO";

export interface SaleDTO {
    saleID:number;
    cpf:number;
    items:ItemCreateDTO[];
    total:number;

}