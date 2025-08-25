// construção de programa ALEXO
const prompt = require("prompt-sync")(); // importa a biblioteca

// declaração de variaveis do sistema
const nomeAssist = "Alexo"; 
let confirmar = true;
let opcao = 0;

// montagem de tela 
function montagemTela() {
    console.log("--------------------------------");
}

// entrada do nome da pessoal com que o assistente irá interagir
function nomePessoa() {
    console.clear();
    console.log(`Olá, meu nome é ${nomeAssist}, seu assistente virtual da Empresa Ifibra!`);
    nome = prompt("Qual o seu nome? ");
    console.log(`Olá ${nome}, em que posso ajudar?`);
}

// controle de erro de opção
function mensagemErro() {
    return "Oi, você digitou uma opção inválida. Digite apenas uma das opções abaixo.";
}

// Função de tela inicial com opções de controle
function menuOpcao() {
    console.clear();
    console.log(`Olá ${nome}, em que posso ajudar?`);
    montagemTela();
    console.log("\n1) Sua conta");
    console.log("2) Suporte técnico");
    console.log("3) Trocar seu Plano");
    console.log("4) Sair");
    montagemTela();
    opcao = parseInt(prompt("Escolha uma opção: "));
    console.clear();
}

//função de chamada de submenu
function menuConfirmar() {
    if (opcao === 1) {
        menuOpcao2();
    } else if (opcao === 2) {
        menuOpcao2();
    } else if (opcao === 3) {
        menuOpcao2();
    } else if (opcao === 4) {
        confirmar = false;
        console.log(`Obrigado, ${nome}, por utilizar nossos serviços!`);
    } else {
        console.log(mensagemErro());
    }
}
// Função de resposta para as opções do submenu
function menuOpcao2() {
    switch (opcao) {
        case 1:
            console.log("Sua conta será enviada para o email cadastrado.");
            break;
        case 2:
            console.log("Sua conexão está ruim, entraremos em contato pelo número cadastrado!");
            break;
        case 3:
            console.log("Entraremos em contato com este número de telefone!");
            break;
    }
    
    montagemTela();
    console.log("\n1) Voltar ao menu anterior");
    console.log("2) Sair");
    montagemTela();
    let escolha = parseInt(prompt("Escolha uma opção: "));

    if (escolha === 1) {
        menuOpcao();
        menuConfirmar();
    } else if (escolha === 2) {
        confirmar = false;
        console.log(`Obrigado, ${nome}, por utilizar nossos serviços!`);
    } else {
        console.clear();
        console.log(mensagemErro());
        menuOpcao2(); // repete submenu se erro
    }
}

// rotina principal do sistema 
nomePessoa();
while (confirmar) {
    menuOpcao();
    menuConfirmar();
}
