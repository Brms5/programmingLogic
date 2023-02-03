const prompt = require("prompt-sync")();

// Exercício 1

function mensagem(nome, idade, endereco, profissao) {
  console.log(
    `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`
  );
}

// mensagem("Bruno", 30, "Campinas", "estudante");

// Exercício 2

function soma(num1, num2) {
  return num1 + num2;
}

// console.log(soma(7, 3));

function maiorOuIgual(num1, num2) {
  return num1 >= num2;
}
// console.log(maiorOuIgual(7, 3));

function numPar(num) {
  return num % 2 == 0;
}
// console.log(numPar(6));

function mensagemMaiuscula(mensagem) {
  const mensagemEmMaisculo = mensagem.toUpperCase();
  console.log(`Tamanho da mensagem: ${mensagem.length}. ${mensagemEmMaisculo}`);
}
// mensagemMaiuscula("hello, world!");

// Exercício 3

function soma(num1, num2) {
  console.log(num1 + num2);
}

function subtracao(num1, num2) {
  console.log(num1 - num2);
}

function multiplicacao(num1, num2) {
  console.log(num1 * num2);
}

function divisao(num1, num2) {
  console.log(num1 / num2);
}

// let num1 = parseInt(prompt("Digite um número: "));
// let num2 = parseInt(prompt("Digite outro número: "));
// soma(num1, num2);
// subtracao(num1, num2);
// multiplicacao(num1, num2);
// divisao(num1, num2);

// Desafios

const imprimeNovaSoma = (novaSoma) => {
  console.log(novaSoma);
};

const novaSoma = (num1, num2) => {
  return num1 + num2;
};

// imprimeNovaSoma(novaSoma(7, 3));

const teoremaDePitagoras = (a, b) => {
  const hip = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  return hip;
};
console.log(teoremaDePitagoras(5, 5));
