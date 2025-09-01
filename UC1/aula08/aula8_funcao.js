// function somar(a, b) {
//     let resultado = a + b;
//     return resultado;
// }
// let somafinal = somar(10, 50);
// console.log(`o Resultado da soma: ${somafinal}`);

// exercicio 2

// const prompt = require("prompt-sync")(); // importa a biblioteca

// function calcularMedia(){
//     let somaNota = 0;
//     for (let i = 0; i < 4; i++){
//         let nota = parseFloat(prompt(`Digite a ${i + 1}ª nota :` ));
//         somaNota += nota;
//     }
//     let media = somaNota / 4;
//     console.log("A sua nota media é", media);
//     if (media >= 7) {
//         console.log("Aprovado");
//     } else {
//         console.log("Reprovado");
//     }
// }
// calcularMedia();


// Imagine que você começou um novo trabalho e seu chefe te passou uma lista de pequenas tarefas repetitivas.
// Seu objetivo é criar uma função para cada uma delas.

// Tarefas:

// 1. Criar um "separador" padrão: Crie uma função chamada mostrarLinha() que imprima no console uma linha com 20 traços (--------------------).

function mostrarLinha() {
   console.log("--------------------");
           
}
// 2. Calcular bônus de funcionário: Crie uma função chamada calcularBonus(salario). Ela deve receber o salário de um funcionário como parâmetro. 
// O bônus é sempre 10% do salário. A função deve retornar o valor do bônus calculado (salario * 0.10).
const prompt = require("prompt-sync")(); // importa a biblioteca
function calcularBonus(salario) {
    salario = parseFloat(prompt("Digite o salário do funcionário: "));
    bonus = salario * 0.10;
    console.log(`O bônus do funcionário é R$ ${bonus}.`);

}


// 3. Montar mensagem de boas-vindas: Crie uma função chamada gerarMensagemBoasVindas(nome, setor).
// Ela deve receber o nome e o setor de um novo funcionário e retornar uma string (texto) formatada, como: "Bem-vindo(a), [Nome]! Você foi alocado(a) ao setor de [Setor].".

function gerarMensagemBoasVindas(nome, setor){
    nome = prompt("nome do funcionario : ");
    setor = prompt ("nome do setor : ");
    console.log (`Olá, ${nome} ! Seja bem-vindo(a) ao setor ${setor}.`);
}
// Depois de criar as três funções acima, escreva um código que:

// 1. Chame mostrarLinha().

// 2. Chame gerarMensagemBoasVindas() com os argumentos "Ana" e "Tecnologia". Guarde a mensagem retornada em uma variável e depois a imprima no console.

// 3. Chame calcularBonus() com o argumento 5000 (representando um salário de R$5000). Guarde o valor retornado em uma variável e imprima uma mensagem como: "O bônus para este funcionário será de R$ [valor do bônus].".

// 4. Chame mostrarLinha() novamente no final.
mostrarLinha();
gerarMensagemBoasVindas();
calcularBonus();
mostrarLinha();
