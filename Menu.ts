import { ProdutoController } from "./src/controller/ProdutoController";
import { Cosmetico } from "./src/model/Cosmetico";
import { Medicamento } from "./src/model/Medicamento";
import { Produto } from "./src/model/Produto";
import readlineSync from 'readline-sync';

export function main(){

    // Definindo variáveis
    let id,tipo,preco,opcao: number;
    let nome,generico,fragrancia : string;
    let tipoProduto = ["Medicamento","Cosmetico"]

    // Instanciando o ProdutoController para chamada dos métodos
    const produtoController : ProdutoController = new ProdutoController();

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("              BANCO DO BRASIL DO BRASIL              ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Consultar Produto por Id             ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");

        console.log("Entre com a opção desejada: ");
        opcao = readlineSync.questionInt("");

        if (opcao == 6) {
            console.log("\nFarmácia TaySantos - Sua saúde e bem-estar em primeiro lugar");
            sobre();
            process.exit(0);
        }

        switch (opcao) {

            // CADASTRO
            case 1:

                console.log("\n\nCadastrar produto\n\n");

                console.log("Digite o nome do produto: ");
                nome = readlineSync.question("");

                console.log("Digite o tipo do produto: ");
                tipo = readlineSync.keyInSelect(tipoProduto,"",{cancel:false}) +1;

                console.log("Digite o preco do produto: ");
                preco = readlineSync.questionFloat("");

                switch (tipo) {
                    case 1: 
                    console.log("Digite o nome do genérico do medicamento: ");
                    generico = readlineSync.question("");
                    produtoController.criarProduto(new Medicamento(produtoController.gerarId(),nome,tipo,preco,generico));

                    break;

                    case 2: 
                    console.log("Digite o nome da fragrância: ");
                    fragrancia = readlineSync.question("");
                    produtoController.criarProduto(new Cosmetico(produtoController.gerarId(),nome,tipo,preco,fragrancia));

                    break;
                }
                keyPress();
                break;

            // LISTAR TODOS 
            case 2:
                console.log("\nListar todos os Produtos\n");
                    produtoController.listarTodosOsProdutos();
                    keyPress();
                break;

            // BUSCAR POR ID
            case 3:
                console.log("\nConsultar Produto por Id\n");
                id = readlineSync.questionInt("Por favor,digite o id do produto: ");
                produtoController.consultarProdutoPorId(id);
                keyPress();
                break;
            
            // ATUALIZAR 
            case 4:
                console.log("\nAtualizar Produto\n");

                id = readlineSync.questionInt("Por favor,digite o id do produto: ")
                
                console.log("Digite o nome do produto: ");
                nome = readlineSync.question("");

                console.log("Digite o tipo do produto: ");
                tipo = readlineSync.keyInSelect(tipoProduto,"",{cancel:false}) +1;

                console.log("Digite o preco do produto: ");
                preco = readlineSync.questionFloat("");

                switch (tipo) {
                    case 1: 
                    console.log("Digite o nome do genérico do medicamento: ");
                    generico = readlineSync.question("");
                    produtoController.atualizarProduto(id,new Medicamento(id,nome,tipo,preco,generico));

                    break;

                    case 2: 
                    console.log("Digite o nome da fragrância: ");
                    fragrancia = readlineSync.question("");
                    produtoController.atualizarProduto(id,new Cosmetico(id,nome,tipo,preco,fragrancia));

                    break;
                }
                keyPress();

                break;

            // DELETAR 
            case 5:
                console.log("\nDeletar um Produto\n");
                id = readlineSync.questionInt("Por favor,digite o id do produto a ser deletado: ");
                produtoController.deletarProduto(id);
                break;
     
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlineSync.prompt();
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Tayluan de Jesus dos Santos");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

main();









