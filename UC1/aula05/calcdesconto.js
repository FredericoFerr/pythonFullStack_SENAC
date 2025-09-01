// Exercico 01 - Desconto
let preco = 150.00;
let desconto = 20;
precoFinal = (preco-desconto);
console.log("O preço final é :", precoFinal);

//Execicio 02 - calcular o IMC

let peso = 70;
let altura = 1.75;
imc = peso / (altura ** 2);
console.log("Seu IMC é :", imc);

//Execico 03 - Elegibilidade para um Concurso
let idade = 22;
let experiencia = true;
if (idade === 22 && experiencia === true) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//Execico 04 - Classificação de Níveis de Acesso
let nivel = 3;
switch (nivel) {
    case 1:
        console.log("Acesso Restrito");
        break;
    case 2:
        console.log("Acesso Parcial");
        break;
    case 3:
        console.log("Acesso Total");
        break;
    default:
        console.log("opção incorreta");
            
}

//Execico 05 - Conversão de Temperatura Celsius para Fahrenheit

let celTemp = 40;
console.log("A temperatura em Fahrenheit é", fahTemp = (celTemp * 9 / 5) + 32);


//Execico 06 - Verificação de Números Pares e Ímpares

let numero = 5;
rest = numero % 2; 
if (rest == 0) {
    console.log("Esse número é Par");
} else {
    console.log("Esse número é Impar");
}

//Execico 07 - Cálculo de Frete com Base no Peso

let peso = 11 ;

if (peso < 5) {
    console.log("Valor do frete é: R$ 10,00");
} else if (peso >= 5 && peso <= 10) {
    console.log("Valor do frete é: R$ 20,00");
} else {
    console.log("Valor do frete é: R$ 30,00");
}
