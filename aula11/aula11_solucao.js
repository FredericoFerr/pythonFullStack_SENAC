// OPÇÃO 1:
// Sistema de Reservas de Hotel:

//  * Crie uma classe Hotel com propriedades: nome, cidade, quartosDisponiveis.
//  * Adicione métodos para reservarQuarto() e cancelarReserva().
//  * Crie uma classe Cliente com nome, CPF e historicoReservas.
//  * Implemente a interação entre elas.

// OPÇÃO 2:
// Jogo de RPG Simples:

//  * Crie uma classe Personagem com vida, ataque, defesa e nome.
//  * Desenvolva subclasses Guerreiro, Mago e Arqueiro com habilidades especiais.
//  * Implemente um sistema de batalha onde dois personagens podem lutar.

// OPÇÃO 3:
// Sistema de Pedidos Online:

//  * Modele classes para Produto (nome, preço, estoque),
//  * Cliente (nome, endereço, carrinho) e Pedido (itens, total, status).
//  * Implemente métodos para adicionar ao carrinho, finalizar compra e calcular frete.

// Metodo classe Cliente

class Cliente {
    constructor(nome, endereco, carrinho) {
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

//metodo classe Produto

class Produto{
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

// metodo class pedido 
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
        // Frete fixo de R$ 20 para pedidos abaixo de R$ 1000
        return this.total >= 1000 ? 0 : 20;
    }
        finalizarCompra() {
        this.calcularTotal();
        const frete = this.calcularFrete();
        this.total += frete;
        this.status = "Finalizado";

        console.log("=== RESUMO DO PEDIDO ===");
        console.log(`Cliente: ${this.cliente.nome}`);
        this.itens.forEach(item =>
            console.log(`${item.quantidade}x ${item.produto.nome} - R$ ${item.produto.preco}`)
        );
        console.log(`Subtotal: R$ ${this.total - frete}`);
        console.log(`Frete: R$ ${frete}`);
        console.log(`Total: R$ ${this.total}`);
        console.log(`Status: ${this.status}`);
    }

}


// Informações para teste

// Produtos 
const p1 = new Produto("Notebook", 3500, 5);
const p2 = new Produto("Mouse", 80, 10);
const p3 = new Produto("Teclado", 120, 2);

// Cadastro do cliente
const cliente1 = new Cliente("Fred", "Rua LP, 76");

// Compra no carrinho
cliente1.adicionarAoCarrinho(p1, 1);
cliente1.adicionarAoCarrinho(p2, 2);
cliente1.adicionarAoCarrinho(p3, 1);

// Gerar pedido
const pedido1 = new Pedido(cliente1);

// Finalizar compra
pedido1.finalizarCompra();