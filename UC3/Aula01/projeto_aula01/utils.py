from models import Item
from typing import List, Optional


def add_Item(store: List[Item], sku: str, nome: str, qty: int) -> None:
    store.append(Item(sku=sku, nome=nome, qty=qty))
    # método sem retorno
    # append é a função de inclusão de uma Item na Lista

def List_Items(store: List[Item]) -> List[Item]:
    return store
    # este método possui retorno (List[Item])

def find_Item(store: List[Item], sku: str) -> Optional[Item]:
    return next((i for i in store if i.sku == sku), None)
    # retorna optional[Item] pode vir None como resultado, para quando não encontrar o Item

def remove_Item(store: List[Item], sku: str) -> bool:
    store.remove(find_Item(store, sku))
        if Item:
            store.remove(Item(sku=sku))
            return True
        return False

