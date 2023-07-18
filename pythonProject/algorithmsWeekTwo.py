# Semana 2 - Tipos de dados (parte 1) - Exercício de apoio

# 2.1

# A soma dos 5 primeiros inteiros positivos.
soma = 1 + 2 + 3 + 4 + 5

# A idade média de Sara (idade 23), Mark (idade 19) e Fátima (idade 31).
media = (23 + 19 + 31) / 3

# O número de vezes que 73 cabe em 403.
divisao = 403 // 73

# O resto da divisão de 403 por 73.
resto = 403 % 73

# 2 à 10ª potência.
potencia = 2 ** 10

# O valor absoluto da distância entre a altura de Sara (54 polegadas) e a altura de Mark (57 polegadas).
distancia = abs(54 - 57)

# O menor preço entre os seguintes preços: R$ 34,99; R$ 29,95 e R$ 31,50.
menor = min(34.99, 29.95, 31.50)

# 2.2

# A soma de 2 e 2 é menor que 4.
soma = 2 + 2
menor = soma < 4

# O valor de 7 // 3 é igual a 1 + 1.
divisao = 7 // 3
igual = divisao == 1 + 1

# A soma de 3 ao quadrado e 4 ao quadrado é igual a 25.
soma = 3 ** 2 + 4 ** 2
igual = soma == 25

# A soma de 2, 4 e 6 é maior que 12.
soma = 2 + 4 + 6
maior = soma > 12

# 1387 é divisível por 19.
divisao = 1387 % 19
divisivel = divisao == 0

# 31 é par.
par = 31 % 2 == 0

# O preço mais baixo dentre R$ 34,99; R$ 29,95 e R$ 31,50 é menor que R$ 30,00.
menor = min(34.99, 29.95, 31.50)
menor = menor < 30.00

# 2.3

# Atribua o valor inteiro 3 à variável a.
a = 3

# Atribua 4 à variável b.
b = 4

# Atribua à variável c o valor da expressão a * a + b * b.
c = a * a + b * b

# 2.4

s1 = 'ant'
s2 = 'bat'
s3 = 'cod'

# A
print(s1 + ' ' + s2 + ' ' + s3)

# B
print(10 * (s1 + ' '))

# C
print(s1 + ' ' + 2 * (s2 + ' ') + 3 * (s3 + ' '))

# D
print(7 * (s1 + ' ' + s2 + ' '))

# E
print(5 * (2 * s2 + s3 + ' '))

# 2.5

s = '0123456789'

# A
print(s[0])

# B
print(s[1])

# C
print(s[6])

# D
print(s[8])

# E
print(s[9])