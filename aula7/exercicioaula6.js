
//Exercicio 1
const prompt = require("prompt-sync")(); // importa a biblioteca


let somaNota = 0;
for (let i = 0; i < 4; i++){
    let nota = parseFloat(prompt(`Digite a ${i + 1}ª nota :` ));
    somaNota += nota;
}
let media = somaNota / 4;
console.log("A sua nota media é", media);
if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//Exercicio 2
// const prompt = require("prompt-sync")(); // importa a biblioteca

//const prompt = require("prompt-sync")(); // importa a biblioteca


let num1 = parseInt(prompt("entre com o 1º numero :"));
let num2 = parseInt(prompt("entre com o 2º numero :"));
let soma = 0;
for (let cont = num1; cont <= num2; cont++){
    if (cont % 2 === 0) {
        soma += cont;
    }
}
// Exibe o resultado
console.log("A soma dos números pares no intervalo é: ", soma);



//exercicio 3

let entrada = prompt("Digite uma palavra ou frase:");

// Remove espaços e transforma em minúsculas
let texto = entrada.replace(/ /g, "").toLowerCase();

// Inverte o texto
let invertido = texto.split("").reverse().join("");

// Verifica se é palíndromo
if (texto === invertido) {
    console.log("É palíndromo");
} else {
    console.log("Não é palíndromo");
}



//Exercicio 4
//const prompt = require("prompt-sync")(); // importa a biblioteca
let valor = parseFloat(prompt("entre com o Valor Principal : "));
let juroAno = parseFloat(prompt("entre com a Taxa de Juros Anual : "));
let prazoAno = parseFloat(prompt("entre com o Tempo de duração em Anos : "));
let taxa = (juroAno / 100);
Mont = valor * (1 + (taxa*prazoAno));
console.log("O montante a receber é :", Mont);

//Exercicio 5

//const prompt = require("prompt-sync")();

let numero = prompt("Digite um número inteiro positivo:");
if (/^\d+$/.test(numero)) {
    console.log("Número de dígitos:", numero.length);
} else {
    console.log("Entrada inválida. Digite um número inteiro positivo.");
}