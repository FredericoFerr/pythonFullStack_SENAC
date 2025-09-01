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