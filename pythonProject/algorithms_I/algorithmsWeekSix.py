# Algoritmo I - Semana 6

# 3.5

# Implemente um programa que solicite do usuário uma lista de palavras (ou seja, strings) e depois exiba na tela, uma por linha, todas as strings de quatro letras nessa lista.
# >>>
# Digite a lista de palavras: ['pare', 'desktop', 'tio', 'pote']
# pare pote
def letters():
    words = input('Digite a lista de palavras: ')
    words = words.replace('[', '').replace(']', '').replace("'", '').replace(' ', '').split(',')
    for word in words:
        if len(word) == 4:
            print(word, end=' ')
# letters()

# 3.6

# Escreva o laço for que exibirá as sequências de números a seguir, um por linha, no shell interativo do Python.

# (a) Inteiros de 0 a 9 (isto é, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9).
def fullIntegers():
    for i in range(10):
        print(i, end=' ')
# fullIntegers()

# (b) Inteiros de 0 a 1 (isto é, 0, 1).
def integers():
    for i in range(2):
        print(i, end=' ')
integers()

# 3.7

# Escreva um laço for que exiba a seguinte sequência de números, um por linha.

# (a) Inteiros de 3 até 12, inclusive este.
def integers():
    for i in range(3, 13):
        print(i, end=' ')

# (b) Inteiros de 0 até (mas não incluindo) 9, com um passo de 2 em vez do padrão 1 (isto é, 0, 2, 4, 6, 8).
def integers():
    for i in range(0, 9, 2):
        print(i, end=' ')

# (c) Inteiros de 0 até (mas não incluindo) 24, com um passo de 3.
def integers():
    for i in range(0, 24, 3):
        print(i, end=' ')

# (d) Inteiros de 3 até (mas não incluindo) 12, com um passo de 5.
def integers():
    for i in range(3, 12, 5):
        print(i, end=' ')

