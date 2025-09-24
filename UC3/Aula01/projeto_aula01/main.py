from typing import List

from models import Item
from utils import add_Item, List_Items, find_Item, remove_Item


def prompt(msg: str) -> str:
    return input(msg).strip()


def print_items(items: List[Item]) -> None:
    if not items:
        print("Nenhum item foi encontrado.")
    for item in items:
        print(f"{item.sku} | {item.nome} | {item.qty}")


def run():
    store: List[Item] = []

    while True:
        print("\n[1] Adicionar Item [2] Listar Itens [3] Buscar Item [4] Remover Item [0] Sair")
        op = prompt("Escolha: ")
        if op == "1":
            add_Item(store, prompt("SKU: "), prompt("Nome: "), int(prompt("Qtd: ")))
            print("Item adicionado com sucesso!")
        elif op == "2":
            print_items(List_Items(store))
        elif op == "3":
            sku = prompt("SKU: ")
            item = find_Item(store, sku)
            print(item if item else "Nenhum item foi encontrado.")
        elif op == "4":
            print("Item removido com sucesso!" if remove_Item(store, prompt("SKU: ")) else "Nenhum item foi encontrado.")
        elif op == "0":
            print("Programa finalizado com sucesso!")
            break
        else:
            print("Opção inválida")


if __name__ == "__main__":
    run()
