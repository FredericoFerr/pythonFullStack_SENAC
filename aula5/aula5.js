// Apresentação de nome e idade
let nome = "joão";
let idade = 25;
console.log(nome, idade);

// Apresentação de expressão matematica
let num1 = 10;
let num2 = 5;
console.log("soma", num1 + num2);
console.log("subtraação", num1 - num2);
console.log("multiplicação", num1 * num2);
console.log("divisão", num1 / num2);

// Apresentação da concatenação de nomes
let primeiroNome = "Maria";
let sobreNome = "Silva";
let nomeCompleto = primeiroNome + " " + sobreNome;
console.log(nomeCompleto); 

let nota = 59;
if (nota >= 60) {
    console.log("Aprovado");
} else if (nota >= 40) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

let diaDaSemana = 3;
switch (diaDaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
}



let x = 15;
let y = 20;
console.log("x é maior que y?", x < y);
console.log("x é igual que y?", x === y);

let temCarteira = true;
let idade = 18;
let temCarro = false;
let podeDirigir = idade >= 18 && temCarteira;
console.log("Pode dirigir :", podeDirigir);
console.log("Pode dirigir :", temCarteira && temCarro);

let frase = "teste de palavra";
console.log(frase.toUpperCase());
let novafrase = frase.replace("teste", "texto");
console.log(novafrase);

let contador = 0;
contador += 5;
contador -= 2;
contador *= 3;
console.log("valor final do conotrador :", contador);