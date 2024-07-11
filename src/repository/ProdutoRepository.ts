import { Produto } from "../model/Produto";

export interface ProdutoRepository {

    criar(produto:Produto) : void;
    listarTodos():void;
    consultarPorId(idProduto:number) : void;
    atualizar(produto:Produto):void; 
    deletar(idProduto:number): void;

}