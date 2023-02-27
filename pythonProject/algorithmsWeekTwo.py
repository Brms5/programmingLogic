# Semana 2 - Tipos de dados (parte 1) - Exercício de apoio

# Exercício 2.1

# (a) A soma dos 5 primeiros inteiros positivos:

soma1 = 1 + 2 + 3 + 4 + 5

# (b) A idade média de Sara (idade 23), Mark (idade 19) e Fátima (idade 31):

idadeMedia = (23 + 19 + 31) / 3

# (c) O número de vezes que 73 cabe em 403:

resultado = 403 // 73

# (d) O resto de quando 403 é dividido por 73:

resto = 403 % 73

# (e) 2 à 10ª potência.

potencia = 2 ** 10

# (f) O valor absoluto da distância entre a altura de Sara (54 polegadas) e a altura de Mark (57 polegadas).

valor = 57 - 54

# (g) O menor preço entre os seguintes preços: R$ 34,99, R$ 29,95 e R$ 31,50.

listaDePrecos = [34.99, 29.95, 31.50]

menorPreco = min(listaDePrecos)


# Exercício 2.2

# (a) A soma de 2 e 2 é menor que 4.

isTrue1 = 2 + 2 < 4
# false

# (b) O valor de 7 // 3 é igual a 1 + 1.

isTrue2 = 7 // 3 == 1 + 1
# true

# (c) A soma de 3 ao quadrado e 4 ao quadrado é igual a 25.

isTrue3 = (3 ** 2) + (4 ** 2) == 25
# true

# (d) A soma de 2, 4 e 6 é maior que 12.

isTrue4 = 2 + 4 + 6 > 12
# false

# (e) 1387 é divisível por 19.

isTrue5 = 1387 % 19 == 0
# true

# (f) 31 é par. (Dica: o que o resto lhe diz quando você divide por 2?)

isPair = 31 % 2 == 0
# false

# (g) O preço mais baixo dentre R$ 34,99, R$ 29,95 e R$ 31,50 é menor que R$ 30,00.*

listaDePrecos = [34.99, 29.95, 31.50]

menorPreco = min(listaDePrecos)

isTrue6 = menorPreco < 30
# true


# Exercício 2.3

# (a) Atribua o valor inteiro 3 à variável a.

a = 3

# (b) Atribua 4 à variável b.

b = 4

# (c) Atribua à variável c o valor da expressão a * a + b * b.

c = a * a + b * b


# Exercício 2.4

s1 = 'ant'
s2 = 'bat'
s3 = 'cod'

# (a) 'ant bat cod'

frase1 = s1 + ' ' + s2 + ' ' + s3

# (b) ant ant ant ant ant ant ant ant ant ant'

frase2 = (s1 + ' ') * 9 + s1

# (c) 'ant bat bat cod cod cod'

frase3 = s1 + ' ' + 2 * (s2 + ' ') + 3 * (s3 + ' ')

# (d) 'ant bat ant bat ant bat ant bat ant bat ant bat ant bat'

frase4 = (s1 + ' ' + s2 + ' ') * 7

# (e) 'batbatcod batbatcod batbatcod batbatcod batbatcod'

frase5 = (s2 + s2 + s3 + ' ') * 5


# Exercício 2.5

s = '0123456789'

# (a) '0'

s[0]

# (b) '1'

s[1]

# (c) '6'

s[-4]

# (d) '8'

s[-2]

# (e) '9'

s[-1]
