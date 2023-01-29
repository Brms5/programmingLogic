const prompt = require("prompt-sync")();

// Exercício 1

// let nome = prompt("Qual é o seu nome? ");
// let idade = prompt("Qual é a sua idade? ");
// console.log(typeof nome, typeof idade);
// console.log(`Olá ${nome}, você tem ${idade} anos.`);

// Exercício 2

// let primeiraPergunta = "Você se chama Bruno? ";
// let segundaPergunta = "Você tem 30 anos? ";
// let terceiraPergunta = "Você mora no Canada? ";

// let primeiraResposta = prompt(primeiraPergunta);
// let segundaResposta = prompt(segundaPergunta);
// let terceiraResposta = prompt(terceiraPergunta);

// console.log(`${primeiraPergunta} - ${primeiraResposta}`);
// console.log(`${segundaPergunta} - ${segundaResposta}`);
// console.log(`${terceiraPergunta} - ${terceiraResposta}`);

// Exercício 3

// let a = 10;
// let b = 25;
// let c;

// c = a;
// a = b;
// b = c;

// console.log("O novo valor de a é", a); // O novo valor de a é 25
// console.log("O novo valor de b é", b); // O novo valor de b é 10

// Desafio

let primeiroNumero = parseInt(prompt("Digite um número: "));
let segundoNumero = parseInt(prompt("Digite um número: "));

let x = primeiroNumero + segundoNumero;
console.log(x);

let y = primeiroNumero * segundoNumero;
console.log(y);
