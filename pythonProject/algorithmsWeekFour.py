# Implemente um programa que solicita a temperatura atual em graus Fahrenheit do usuário e exibe a temperatura em graus Celsius
import math


def f(fahrenheit):
    celsius = 5 / 9 * (fahrenheit - 32)
    return celsius


# Defina, diretamente no shell interativo, a função média(), que aceita dois números como entrada e retorna a média dos números. Um exemplo de uso é:
def average(x, y):
    result = (x + y) / 2
    return result


# Implemente a função perímetro(), que aceita, como entrada, o raio de um círculo (um número não negativo) e retorna o perímetro do círculo. Você deverá escrever sua implementação em um módulo chamado perímetro.py. Um exemplo de uso é:
def perimetro(raio):
    return 2 * math.pi * raio


# Escreva a função negativos(), que aceita uma lista como entrada e exibe, um por linha, os valores negativos na lista. A função não deverá retornar nada.

lista = [4, 0, -1, -3, 6, -9]
# def negativos(x):
#     resultado = [i for i in x if i < 0]
#     for n in resultado:
#         print(n)
#
# negativos(lista)

# Suponha que uma lista não vazia time foi atribuída. Escreva uma instrução Python ou instruções que mapeiam o primeiro e último valor da lista.

# time = ['Ava', 'Eleanor', 'Clare', 'Sarah']
# primeiroValor = time[0]
# time[0] = time[-1]
# time[-1] = primeiroValor


# Implemente a função trocaPU(), que aceita uma lista como entrada e troca o primeiro e último elementos da lista. Você pode considerar que a lista não estará vazia. A função não deverá retornar nada.

def trocaPU(lista):
    primeiroValor = lista[0]
    lista[0] = lista[-1]
    lista[-1] = primeiroValor



dia = 20

mes = 'Outubro'

ano = 2022

print(dia, mes, ano, sep= ' de ')


