// Valid Parentheses
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

var isValid = function(s) {
    var stack = Array();
    var map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    // Percorre a string s e verifica se o caractere atual é um parêntese de abertura ou fechamento. 
    // Se for um parêntese de abertura, adiciona o parêntese de fechamento correspondente à pilha.
    // Se for um parêntese de fechamento, verifica se o parêntese de fechamento correspondente é o último elemento da pilha.
    // Se for o último elemento da pilha, remove o último elemento da pilha.
    // Se não for o último elemento da pilha, retorna false.
    // Se a pilha estiver vazia, retorna false.
    // Se a pilha não estiver vazia, retorna true.
    for (var i = 0; i < s.length; i++) {
        console.log(map[s[i]]);
        if (map[s[i]]) {
            stack.push(map[s[i]]);
        } else {
            console.log(stack);
            if (s[i] !== stack.pop()) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid("()[]"));

const objeto = {
    nome: 'Maria',
    idade: 20,
    cidade: 'São Paulo'
}

// console.log(objeto['nome']);