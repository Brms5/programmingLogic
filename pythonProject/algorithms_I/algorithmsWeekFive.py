# Estruturas de condição

# 3.2

# Se idade é maior que 62, exiba 'Você pode obter benefícios de pensão'.
idade = 65
def beneficios(idade):
    if idade > 62:
        print('Você pode obter benefícios de pensão')
    else:
        print('Você não pode obter benefícios de pensão')
# beneficios(idade)

# Se o nome está na lista ['Musial', 'Aaraon', 'Williams', 'Gehrig', 'Ruth'], exiba 'Um dos 5 maiores jogadores de beisebol de todos os tempos!'.
nome = 'Musial'
def jogadores(nome):
    if nome in ['Musial', 'Aaraon', 'Williams', 'Gehrig', 'Ruth']:
        print('Um dos 5 maiores jogadores de beisebol de todos os tempos!')
    else:
        print('Não é um dos 5 maiores jogadores de beisebol de todos os tempos!')
# jogadores(nome)

# Se golpes é maior que 10 e defesas é 0, exiba 'Você está morto…'.
golpes = 11
defesas = 0
def morto(golpes, defesas):
    if golpes > 10 and defesas == 0:
        print('Você está morto...')
    else:
        print('Você está vivo!')
# morto(golpes, defesas)

# Se pelo menos uma das variáveis booleanas norte, sul, leste e oeste for True, exiba 'Posso escapar.'.
norte = True
sul = False
leste = False
oeste = False
def escapar(norte, sul, leste, oeste):
    if norte or sul or leste or oeste:
        print('Posso escapar.')
    else:
        print('Não posso escapar.')
# escapar(norte, sul, leste, oeste)

# 3.3

# Se ano é divisível por 4, exiba 'Pode ser um ano bissexto.'; caso contrário, exiba 'Definitivamente não é um ano bissexto.'
ano = 2020
def bissexto(ano):
    if ano % 4 == 0:
        print('Pode ser um ano bissexto.')
    else:
        print('Definitivamente não é um ano bissexto.')
# bissexto(ano)

# Se a lista bilhete é igual à lista loteria, exiba 'Você ganhou!'; se não, exiba 'Melhor sorte da próxima vez…'.
bilhete = [1, 2, 3, 4, 5]
loteria = [1, 2, 3, 4, 6]
def loteriaBr(bilhete, loteria):
    if bilhete == loteria:
        print('Você ganhou!')
    else:
        print('Melhor sorte da próxima vez…')
# loteriaBr(bilhete, loteria)

# 3.4

# Implemente um programa que comece pedindo ao usuário para digitar uma identificação de login (ou seja, uma string). 
# O programa, então, verifica se a identificação informada pelo usuário está na lista ['joe', 'sue', ' hani', 'sophie' ] de usuários válidos. 
# Dependendo do resultado, uma mensagem apropriada deverá ser impressa. Não importando o resultado, sua função deverá exibir 'Fim.' antes de terminar.
 
# Aqui está um exemplo de um login bem-sucedido:
# >>>
# Login: joe
# Você entrou!
# Fim.

# E aqui está um que não tem sucesso:
# >>>
# Login: john
# Usuário desconhecido.
# Fim.

login = input('Login: ')
def novoLogin(login):
    if login in ['joe', 'sue', ' hani', 'sophie']:
        print('Você entrou!')
    else:
        print('Usuário desconhecido.')
    print('Fim.')
# novoLogin(login)

# 5.1

# Implemente a função meuIMC(), que aceita como entrada a altura de uma pessoa (em metros) e o peso (em quilos) e calcula o Índice de Massa Corporal (IMC) dessa pessoa. 
# A fórmula do IMC é:

# Sua função deverá exibir a string 'Abaixo do peso' se o imc < 18.5, 'Normal' se 18,5 <= imc < 25, e 'Sobrepeso' se imc >= 25.

# >>> meuIMC(86, 1.90)
# Normal
# >>> meuIMC(63, 1.90)
# Abaixo do peso

def meuIMC(peso, altura):
    imc = peso / altura ** 2
    if imc < 18.5:
        print('Abaixo do peso')
    elif imc < 25:
        print('Normal')
    else:
        print('Sobrepeso')
# meuIMC(86, 1.90)



