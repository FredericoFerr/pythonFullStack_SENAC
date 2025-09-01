const prompt = require("prompt-sync")(); // precisa instalar com: npm install prompt-sync

class Cliente {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.carrinho = [];
    }

    adicionarAoCarrinho(produto, quantidade) {
        if (produto.reduzirEstoque(quantidade)) {
            this.carrinho.push({ produto, quantidade });
            console.log(`${quantidade}x ${produto.nome} adicionado ao carrinho.`);
        } else {
            console.log(`Estoque insuficiente de ${produto.nome}.`);
        }
    }
}

class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque; 
    }

    reduzirEstoque(quantidade) {
        if (this.estoque >= quantidade) {
            this.estoque -= quantidade;
            return true;
        }
        return false;
    }
}

class Pedido {
    constructor(cliente) {
        this.cliente = cliente;
        this.itens = cliente.carrinho;
        this.total = 0;
        this.status = "Aguardando";
    }

    calcularTotal() {
        this.total = this.itens.reduce(
            (soma, item) => soma + item.produto.preco * item.quantidade,
            0
        );
        return this.total;
    }

    calcularFrete() {
        return this.total >= 1000 ? 0 : 20;
    }

    finalizarCompra() {
        this.calcularTotal();
        const frete = this.calcularFrete();
        const subtotal = this.total;
        const totalFinal = subtotal + frete;

        console.log("\n=== RESUMO DO PEDIDO ===");
        console.log(`Cliente: ${this.cliente.nome}`);
        this.itens.forEach(item =>
            console.log(`${item.quantidade}x ${item.produto.nome} - R$ ${item.produto.preco}`)
        );
        console.log(`Subtotal: R$ ${subtotal}`);
        console.log(`Frete: R$ ${frete}`);
        console.log(`Total: R$ ${totalFinal}`);

        //Confirmação do Pedido
        const confirmar = prompt("Deseja confirmar a compra? (s/n): ");
        if (confirmar.toLowerCase() === "s") {
            this.total = totalFinal;
            this.status = "Finalizado";
            console.log("\n Compra confirmada com sucesso!");
        } else {
            this.status = "Cancelado";
            console.log("\n Compra cancelada pelo usuário.");
        }

        console.log(`Status do Pedido: ${this.status}`);
    }
}

// ------------------- TESTANDO -------------------

// Criando produtos
const p1 = new Produto("Notebook", 3500, 5);
const p2 = new Produto("Mouse", 80, 10);

// Criando cliente
const cliente1 = new Cliente("João Silva", "Rua A, 123");

// Adicionando ao carrinho
cliente1.adicionarAoCarrinho(p1, 1);
cliente1.adicionarAoCarrinho(p2, 2);

// Criando pedido
const pedido1 = new Pedido(cliente1);

// Finalizando compra
pedido1.finalizarCompra();
