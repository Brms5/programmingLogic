# Semana 7 - Vetores e Matrizes

# 4.1

s = '0123456789'
# Agora, escreva expressões (usando s e o operador de indexação) que sejam avaliadas como:

# (a) '234'
# print(s[2:5])

# (b) '78'
# print(s[7:9])

# (c) '1234567'
# print(s[1:8])

# (d) '0123'
# print(s[0:4])

# (e) '789'
# print(s[7:10])

# 4.2	

# Supondo que a variável previsão tenha recebido a string
# 'It will be a sunny day today'
# escreva instruções Python correspondentes a estas atribuições:

# (a) A variável cont, a quantidade de ocorrências da string 'day' na string previsão.
previsao = 'It will be a sunny day today'
cont = previsao.count('day')
# print(cont)

# (b) A variável clima, o índice em que a substring 'sunny' começa.
clima = previsao.find('sunny')
# print(clima)

# (c) A variável troca, uma cópia de previsão na qual cada ocorrência da substring 'sunny' é substituída por 'cloudy'.
troca = previsao.replace('sunny', 'cloudy')
# print(troca)

# 5.9

# Escreva uma função soma2D() que aceita duas listas bidimensionais do mesmo tamanho (ou seja, o mesmo número de linhas e colunas),
# como argumentos de entrada e incrementa cada entrada na primeira lista com o valor da entrada correspondente na segunda lista.
t = [[4, 7, 2, 5], [5, 1, 9, 2], [8, 3, 6, 6]]
s = [[0, 1, 2, 0], [0, 1, 1, 1], [0, 1, 0, 0]]
# >>> soma2D(t,s)
# >>> for linha in t:
#       print(linha)
# [4, 8, 4, 5]
# [5, 2, 10, 3]
# [8, 4, 6, 6]

def soma2D(lista1, lista2):
    for i in range(len(lista1)):
        for j in range(len(lista1[i])):
            lista1[i][j] += lista2[i][j]

soma2D(t, s)
print(t)