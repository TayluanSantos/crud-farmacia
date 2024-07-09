import { Produto } from "./Produto";

export class Cosmetico extends Produto {

    private _fragrancia:string;


	constructor(id: number, nome: string, tipo: number, preco: number,generico: string) {
        super(id,nome,tipo,preco)
		this._fragrancia = generico;
	}

	public get fragrancia (): string {
		return this._fragrancia;
	}

	public set fragrancia (value: string) {
		this._fragrancia = value;
	}

	public visualizar(): void {
		super.visualizar();
		console.log(`Fragrância: ${this.fragrancia}`);
	}

}