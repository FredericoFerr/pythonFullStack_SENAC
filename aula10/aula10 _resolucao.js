


// 1. Soma de Matrizes:
// Crie duas matrizes 3x3 e escreva uma função para somá-las. A função deve retornar uma nova matriz com o resultado.

let matriz1 = [[1, 2, 3],
               [3, 5, 1],
               [2, 4, 6]
];

let matriz2 = [[11, 10, 5],
               [3, 15, 9],
               [0, 1, 2]
];


// Função para somar duas matrizes
function somarMatrizes(m1, m2) {
    let resultado = [];

    for (let i = 0; i < m1.length; i++) {
        let linha = [];
        for (let j = 0; j < m1[i].length; j++) {
            linha.push(m1[i][j] + m2[i][j]); // soma elemento a elemento
        }
        resultado.push(linha);
    }

    return resultado;
}

// Chamando a função
let matrizResultado = somarMatrizes(matriz1, matriz2);

// Exibindo no console
console.log("Matriz 1:", matriz1);
console.log("Matriz 2:", matriz2);
console.log("Matriz Resultado (matriz1 + matriz2):", matrizResultado);


// 2. Transposição de Matriz:
// Escreva uma função que receba uma matriz 3x3 e retorne sua transposta (troque linhas por colunas).// Função para calcular a transposta de uma matriz 3x3

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function transposta(matriz) {
    let resultado = [];

    for (let i = 0; i < matriz[0].length; i++) {
        let linha = [];
        for (let j = 0; j < matriz.length; j++) {
            linha.push(matriz[j][i]); // troca linha por coluna
        }
        resultado.push(linha);
    }

    return resultado;
}


console.log("Matriz original:", matriz);
console.log("Matriz transposta:", transposta(matriz));



// 3. Multiplicação de Matrizes:
// Crie duas matrizes 2x2 e escreva uma função para multiplicá-las.
let matrizM1 =   [[1, 2, 3],
                 [3, 5, 1]
];
let matrizM2 = [[11, 10, 5],
               [3, 15, 9]
];

function somarMatrizes(m1, m2) {
    let resultado = [];

    for (let i = 0; i < m1.length; i++) {
        let linha = [];
        for (let j = 0; j < m1[i].length; j++) {
            linha.push(m1[i][j] * m2[i][j]); // soma elemento a elemento
        }
        resultado.push(linha);
    }

    return resultado;
}

// Chamando a função
let matrizResultado = somarMatrizes(matrizM1, matrizM2);

// Exibindo no console
console.log("Matriz 1:", matrizM1);
console.log("Matriz 2:", matrizM2);
console.log("Matriz Resultado (matriz1 x matriz2):", matrizResultado);


// 4. Jogo da Velha:
// Implemente um jogo da velha usando uma matriz 3x3. O programa deve permitir que dois jogadores façam jogadas alternadas e verifique se há um vencedor.
const prompt = require("prompt-sync")();

// Cria o tabuleiro 3x3 vazio
let tabuleiro = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

// Função para exibir o tabuleiro
function mostrarTabuleiro() {
    console.log("\n");
    for (let i = 0; i < 3; i++) {
        console.log(tabuleiro[i].join(" | "));
        if (i < 2) console.log("---------");
    }
    console.log("\n");
}

// Função para verificar se há vencedor
function verificarVencedor() {
    // Linhas
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0] !== " " &&
            tabuleiro[i][0] === tabuleiro[i][1] &&
            tabuleiro[i][1] === tabuleiro[i][2]) {
            return tabuleiro[i][0];
        }
    }

    // Colunas
    for (let j = 0; j < 3; j++) {
        if (tabuleiro[0][j] !== " " &&
            tabuleiro[0][j] === tabuleiro[1][j] &&
            tabuleiro[1][j] === tabuleiro[2][j]) {
            return tabuleiro[0][j];
        }
    }

    // Diagonal principal
    if (tabuleiro[0][0] !== " " &&
        tabuleiro[0][0] === tabuleiro[1][1] &&
        tabuleiro[1][1] === tabuleiro[2][2]) {
        return tabuleiro[0][0];
    }

    // Diagonal secundária
    if (tabuleiro[0][2] !== " " &&
        tabuleiro[0][2] === tabuleiro[1][1] &&
        tabuleiro[1][1] === tabuleiro[2][0]) {
        return tabuleiro[0][2];
    }

    return null;
}

// Função para verificar se deu empate
function verificarEmpate() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tabuleiro[i][j] === " ") {
                return false;
            }
        }
    }
    return true;
}

// Jogo principal
let jogador = "X";
let vencedor = null;

while (!vencedor && !verificarEmpate()) {
    mostrarTabuleiro();
    console.log(`Vez do jogador ${jogador}`);

    let linha = parseInt(prompt("Digite a linha (0-2): "));
    let coluna = parseInt(prompt("Digite a coluna (0-2): "));

    if (linha >= 0 && linha < 3 && coluna >= 0 && coluna < 3 && tabuleiro[linha][coluna] === " ") {
        tabuleiro[linha][coluna] = jogador;

        vencedor = verificarVencedor();
        if (!vencedor) {
            jogador = (jogador === "X") ? "O" : "X"; // alterna jogador
        }
    } else {
        console.log("Jogada inválida, tente novamente!");
    }
}

mostrarTabuleiro();

if (vencedor) {
    console.log(`Jogador ${vencedor} venceu!`);
} else {
    console.log("Empate!");
}



// 5. Busca em Matriz:
// Escreva uma função que receba uma matriz e um número, e retorne a posição (linha e coluna) desse número na matriz. Se o número não estiver na matriz, retorne null.

function encontrarNumero(matriz, numero) {
    for (let i = 0; i < matriz.length; i++) { // percorre as linhas
        for (let j = 0; j < matriz[i].length; j++) { // percorre as colunas
            if (matriz[i][j] === numero) {
                return { linha: i, coluna: j }; 
            }
        }
    }
    return null; // se não encontrar o número
}

// Exemplo de uso:
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(encontrarNumero(matriz, 5));  // { linha: 1, coluna: 1 }
console.log(encontrarNumero(matriz, 9));  // { linha: 2, coluna: 2 }
console.log(encontrarNumero(matriz, 10)); // null

// 6. Matriz Identidade:
// Crie uma função que gere uma matriz identidade de tamanho NxN (uma matriz onde os elementos da diagonal principal são 1 e os demais são 0).

function matrizIdentidade(n) {
    let matriz = [];

    for (let i = 0; i < n; i++) {
        let linha = [];
        for (let j = 0; j < n; j++) {
            if (i === j) {
                linha.push(1); // diagonal principal
            } else {
                linha.push(0); // demais posições
            }
        }
        matriz.push(linha);
    }

    return matriz;
}

//Saida de matriz:
console.log(matrizIdentidade(3));



// 7. Rotação de Matriz:
// Escreva uma função que rotacione uma matriz 3x3 em 90 graus no sentido horário.
function rotacionarMatriz90(matriz) {
    let n = matriz.length;
    let novaMatriz = [];

    for (let i = 0; i < n; i++) {
        let linha = [];
        for (let j = n - 1; j >= 0; j--) {
            linha.push(matriz[j][i]);
        }
        novaMatriz.push(linha);
    }

    return novaMatriz;
}

// Matriz de entrada
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(rotacionarMatriz90(matriz));



// 8. Soma das Bordas:
// Escreva uma função que calcule a soma dos elementos das bordas de uma matriz NxN.


function somaBorda(matriz) {
    let n = matriz.length;
    let soma = 0;

    // primeira e última linha
    for (let j = 0; j < n; j++) {
        soma += matriz[0][j];       // primeira linha
        soma += matriz[n - 1][j];   // última linha
    }

    // primeira e última coluna (sem contar os cantos já somados)
    for (let i = 1; i < n - 1; i++) {
        soma += matriz[i][0];       // primeira coluna
        soma += matriz[i][n - 1];   // última coluna
    }

    return soma;
}

// Matriz de entrada
let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

console.log(somaBorda(matriz)); 