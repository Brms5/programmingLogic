# Recursão

# A função recursiva é aquela que chama a si mesma.

# Exemplo de função recursiva:

def imprime(lista):
    for i in range(len(lista)):
        print(lista[i])

def imprime_recursivo(lista, i=0):
    if i < len(lista):
        print(lista[i])
        imprime_recursivo(lista, i+1)

lista = [1, 2, 3, 4, 5]
# imprime(lista)
# imprime_recursivo(lista)

def fatorial(n):
    if n == 0:
        return 1
    else:
        return n * fatorial(n-1)
    
print(fatorial(5))

# Implementar uma função recursiva para calcular o n-ésimo termo da sequência de Fibonacci.
# Considere os três pontos definidos para o problema:
# 1) f(0) = 0, f(1) = 1, f(n) = f(n-1) + f(n-2) p/ n>=2
# 2) n=0 ou n=1
# 3) n deve ser decrementado a cada chamada

def fibonacci(n):
    if n == 0 or n == 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)
    
print(fibonacci(5))

# Iteração vs Recursão

# Iteração: é o processo de repetição de um bloco de instruções.
# Recursão: é o processo de repetição de um bloco de instruções que chama a si mesmo.

# Exemplo de iteração:

def fib_iteracao(n):
    res = n
    a, b = 0, 1
    for i in range(2, n+1):
        res = a + b
        a, b = b, res
    return res

# Dada uma lista l de n números, implemente uma função recursiva que retorna o maior elemento do conjunto.

l = [1, 2, 3, 4, 5, 6, 7, 8, 9]

def maior_elemento(l):
    if len(l) == 1:
        return l[0]
    else:
        m = maior_elemento(l[1:])
        return m if m > l[0] else l[0]

# Dada uma lista l de n números, implemente uma função recursiva que retorna a soma de todos os elementos do conjunto.

def soma_elementos(l):
    if len(l) == 1:
        return l[0]
    else:
        return l[0] + soma_elementos(l[1:])
    

