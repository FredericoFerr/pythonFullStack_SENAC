
from dataclasses import dataclass



@dataclass # decorator
class Item:
    sku: str  #ex.: A12345
    nome: str # ex.: Mouse
    qty: int = 0 # ex.: 10
