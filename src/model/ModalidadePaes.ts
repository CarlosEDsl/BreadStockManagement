export class ModalidadePaes{
    private id:number;
    private name:string;
    private price:number;
    private vegan:boolean;

    constructor(nome:string, preco:number, vegano:boolean) {
        this.name = nome;
        this.price = preco;
        this.vegan = vegano;
        this.id = this.gerarId();
    }

    private gerarId():number{
        return Date.now();
    }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }
    public setName(name:string) {
        this.name = name;
    }

    public getPrice() {
        return this.price;
    }
    public setPrice(price:number) {
        this.price = price;
    }

    public isVegan() {
        return this.vegan;
    }
    public setIsVegan(vegan:boolean) {
        this.vegan = vegan;
    }



}