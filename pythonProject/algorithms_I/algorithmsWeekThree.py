import math

# Primeiro, execute a atribuição
# palavras = ['taco', 'bola', 'celeiro', 'cesta', 'peteca']
# Agora, escreva duas expressões Python que são avaliadas, respectivamente, como a primeiro e a última palavras em palavras, na ordem do dicionário.

palavras = ['taco', 'bola', 'celeiro', 'cesta', 'peteca']
palavras.sort()
primeiraPalavra = palavras[0]
ultimaPalavra = palavras[-1]


# Dada a lista de notas de trabalho de casa dos alunos
notas = [9, 7, 7, 10, 3, 9, 6, 6, 2]

# escreva:
# (a) Uma expressão que avalia para o número de 7 notas.

primeirosSeteNumeros = notas[0:7]

# (b) Uma instrução que muda a última nota para 4.

notas[-1] = 4

# (c) Uma expressão que avalia para a nota mais alta.

maiorNumero = max(notas)

# (d) Uma instrução que classifica as notas da lista.

notas.sort()

# (e) Uma expressão que avalia para a média das notas.

media = sum(notas) / len(notas)

# 2.8

# Em que ordem os operadores nas expressões a seguir são avaliados?
# A ordem de avaliação dos operadores em expressões em Python segue as seguintes regras, em ordem de precedência decrescente:
#
# Parênteses: expressões dentro de parênteses são avaliadas primeiro.
# Potenciação (**): operações de potenciação são avaliadas em segundo lugar.
# Multiplicação (*), divisão (/), divisão inteira (//) e resto da divisão (%): operações de multiplicação, divisão, divisão inteira e resto da divisão são avaliadas em terceiro lugar, da esquerda para a direita.
# Adição (+) e subtração (-): operações de adição e subtração são avaliadas em quarto lugar, da esquerda para a direita.
# Comparação (==, !=, <, >, <=, >=): operações de comparação são avaliadas em quinto lugar, da esquerda para a direita.
# Operadores lógicos (not, and, or): operações de negação (not), conjunção (and) e disjunção (or) são avaliadas em sexto lugar, da esquerda para a direita.
# Com base nessas regras, podemos avaliar a ordem de avaliação dos operadores nas expressões dadas:
#
# (a) 2 + 3 == 4 or a >= 5
# A ordem de avaliação é a seguinte:
# 2 + 3 é avaliado primeiro e resulta em 5.
# 5 == 4 é avaliado em segundo lugar e resulta em False.
# False or a >= 5 é avaliado em terceiro lugar e resulta em True se a >= 5 ou False caso contrário.

# (b) lst[1] * -3 < -10 == 0
# A ordem de avaliação é a seguinte:
# lst[1] é avaliado primeiro e retorna o segundo elemento da lista lst.
# lst[1] * -3 é avaliado em segundo lugar e resulta no segundo elemento de lst multiplicado por -3.
# -10 == 0 é avaliado em terceiro lugar e resulta em False.
# lst[1] * -3 < -10 == 0 é avaliado em quarto lugar e resulta em True se lst[1] * -3 for menor que -10 ou False caso contrário.

# (c) (lst[1] * -3 < -10) in [0, True]
# A ordem de avaliação é a seguinte:
# lst[1] é avaliado primeiro e retorna o segundo elemento da lista lst.
# lst[1] * -3 é avaliado em segundo lugar e resulta no segundo elemento de lst multiplicado por -3.
# lst[1] * -3 < -10 é avaliado em terceiro lugar e resulta em True se lst[1] * -3 for menor que -10 ou False caso contrário.
# [0, True] é uma lista contendo os valores 0 e True.
# (lst[1] * -3 < -10) in [0, True] é avaliado em quarto lugar e resulta em True se o valor anterior estiver presente na lista [0, True] ou False caso contrário.

# (d) 2 * 3**2
# A ordem de avaliação é a seguinte:
# 3**2 é avaliado primeiro e resulta em 9.

# e) 4 / 2 in [1, 2, 3]
# A ordem de avaliação é a seguinte:
# 4 / 2 é avaliado primeiro e resulta em 2.

# 2.9

# Qual é o tipo do objeto ao qual essas expressões são avaliadas?
# (a) False + False
print(False + False)
# = 0

# (b) 2 * 3**2.0
print(2 * 3**2.0)
# = 18

# (c) 4 // 2 + 4 % 2
print(4 // 2 + 4 % 2)
# = 2

# (d) 2 + 3 == 4 or 5 >= 5
print(2 + 3 == 4 or 5 >= 5)
# True

# 2.10

# Escreva expressões Python correspondentes ao seguinte:
# (a) O comprimento da hipotenusa em um triângulo retângulo cujos dois outros lados têm comprimentos a e b
a = 5
b = 10
hipotenusa = math.sqrt(a**2 + b**2)
print(hipotenusa)

# (b) O valor da expressão que avalia se o comprimento da hipotenusa acima é 5
print(hipotenusa == 5)

# (c) A área de um disco com raio a
area = math.pi * a**2
print(area)

# (d) O valor da expressão Booleana que verifica se um ponto com coordenadas x e y está dentro de um círculo com centro ( a, b ) e raio r
x = 5
y = 10
a = 5
b = 10
r = 5
dentro = math.sqrt((x - a)**2 + (y - b)**2) < r