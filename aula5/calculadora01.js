//Prorama calculadora
let numero1 = 10;
let numero2 = 5;
let operador = 2;

switch (operador) {
    case 1:
        soma = (numero1 + numero2); // soma de dois números
        console.log("A soma é :", soma);
        break;
    case 2:
        subtracao = (numero1 - numero2); // subtração de dois números
        console.log("A subtração é :", subtracao);
        break;
    case 3:
        multiplicar = (numero1 * numero2); // multiplicação de dois números
        console.log("A multiplicação é :", multiplicar);
        break;
    case 4:
        divisao = (numero1 / numero2); // divisão de dois números
        console.log("A divisão é :", divisao);
        break;
    default:
        console.log("Número inválido");

}