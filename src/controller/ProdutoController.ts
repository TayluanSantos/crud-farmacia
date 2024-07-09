import { Produto } from '../model/Produto';
import { ProdutoRepository } from './../repository/ProdutoRepository';

export class ProdutoController implements ProdutoRepository {

    private listaProdutos : Produto[] = new Array<Produto>();
    private id : number = 0;


    // CRIAR PRODUTO 

    criarProduto(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("\nProduto cadastrado com sucesso!");
    }

    // LISTAR TODOS OS PRODUTOS
    listarTodosOsProdutos(): void {
        for(let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }

    // CONSULTAR PRODUTO PELO ID
    consultarProdutoPorId(idProduto: number): void {
        let produto = this.buscarNoArray(idProduto);
        if(produto != null){
            produto.visualizar();
        } else {
            console.log("Produto não encontrado!")
        }
    }
    
    // ATUALIZAR PRODUTO
    atualizarProduto(idProduto:number,novoProduto: Produto): void {

        let produto = this.buscarNoArray(idProduto); // Retorna o produto pelo Id
        
        if(produto != null){

            let produtoIndice = this.listaProdutos.indexOf(produto); // Pega o índice do produto
            this.listaProdutos.splice(produtoIndice,1,novoProduto) // Remove o produto anterior e atualiza pelo novo produto na mesma posição do array

            console.log("\nProduto atualizado!");
       
        } else {
            console.log("Produto não encontrado!")
        }
    }

    // DELETAR PRODUTO
    deletarProduto(idProduto: number): void {

        let produto = this.buscarNoArray(idProduto);

        if(produto != null){
            this.listaProdutos.splice(this.listaProdutos.indexOf(produto),1);
            console.log("Produto deletado!");
        } else {
            console.log("Produto não encontrado!")
        }
    }

    
    public buscarNoArray(idProduto:number) : Produto | null{
        for(let produto of this.listaProdutos){
            if(produto.id == idProduto){
                return produto;
            }
        }
        return null;
    }

    public gerarId() : number {
        return ++ this.id;
    }
    
}