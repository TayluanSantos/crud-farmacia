import { Produto } from '../model/Produto';
import { ProdutoRepository } from './../repository/ProdutoRepository';

export class ProdutoController implements ProdutoRepository {

    private listaProdutos : Produto[] = new Array<Produto>();
    private id : number = 0;


    // CRIAR PRODUTO 

    criar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("\nProduto cadastrado com sucesso!");
    }

    // LISTAR TODOS OS PRODUTOS
    listarTodos(): void {
        for(let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }

    // CONSULTAR PRODUTO PELO ID
    consultarPorId(idProduto: number): void {
        let produto = this.buscarNoArray(idProduto);
        if(produto != null){
            produto.visualizar();
        } else {
            console.log("Produto não encontrado!")
        }
    }
    
    // ATUALIZAR PRODUTO
    atualizar(novoProduto: Produto): void {

        let produto = this.buscarNoArray(novoProduto.id);


        if (produto !== null) {
            this.listaProdutos[this.listaProdutos.indexOf(produto)] = novoProduto;
            console.log("\n O produto foi atualizado!");
        } else {
            console.log("\Produto não encontrada!");
        }
    }

    // DELETAR PRODUTO
    deletar(idProduto: number): void {

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