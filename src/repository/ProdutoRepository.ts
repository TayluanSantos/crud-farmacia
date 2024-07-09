import { Produto } from "../model/Produto";

export interface ProdutoRepository {

    criarProduto(produto:Produto) : void;
    listarTodosOsProdutos():void;
    consultarProdutoPorId(idProduto:number) : void;
    atualizarProduto(idProduto: number, produto:Produto):void; 
    deletarProduto(idProduto:number): void;

}