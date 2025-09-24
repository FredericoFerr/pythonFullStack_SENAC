from typing import List, Optional
from models import Item


def add_Item(store: List[Item], sku: str, nome: str, qty: int) -> None:
    store.append(Item(sku=sku, nome=nome, qty=qty))


def List_Items(store: List[Item]) -> List[Item]:
    return store


def find_Item(store: List[Item], sku: str) -> Optional[Item]:
    return next((i for i in store if i.sku == sku), None)


def remove_Item(store: List[Item], sku: str) -> bool:
    item = find_Item(store, sku)
    if item:
        store.remove(item)
        return True
    return False
