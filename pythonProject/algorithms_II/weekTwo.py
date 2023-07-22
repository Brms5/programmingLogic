# Programação orientada a objetos I

# Sobrecarga de operadores

class Point:

    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def _repr_(self):
        return '({}{})'.format(self.x, self.y)

    def _add_(self, other):
        if type(other) == Point:
            return Point(self.x + other.x, self.y + other.y)
        else:
            return Point(self.x + other, self.y + other)
        
# Herança
# Serve para reutilizar ou alterar os métodos de classes já existentes, bem como adicionar novos métodos e atributos
# a fim de adaptar as classes a novas situações.

# Exemplo de herança

class Animal:
    def __init__(self, nome, cor):
        self.nome = nome
        self.cor = cor
    
    def comer(self):
        print('O animal está comendo...')

class Cachorro(Animal):
    def __init__(self, nome, cor, raca):
        super().__init__(nome, cor)
        self.raca = raca
    
    def latir(self):
        print('O cachorro está latindo...')

newDog = Cachorro('Rex', 'Marrom', 'Pitbull')
print(newDog.nome) 
print(newDog.cor)
print(newDog.raca)
newDog.comer()
        

