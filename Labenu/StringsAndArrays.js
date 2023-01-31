const prompt = require("prompt-sync")();

// Exercício 1

// let nomeDoUsuario = prompt("Qual é o seu nome? ");
// let emailDoUsuario = prompt("Qual é o seu e-mail? ");
// console.log(
//   `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}.`
// );

// Exercício 2

// const comidas = [`iogurte`, `whey`, `salada`, `peixe`, `morango`];
// console.log(comidas);
// console.log(`Essas são as minhas comidas preferidas: ${comidas}`);

// const comidaPreferida = prompt("Qual é a sua comida preferida? ");
// Object.assign(comidas, { 1: comidaPreferida });

// console.log(comidas);

// Exercício 3

// let listaDeTarefas = [];
// let primeiraTarefa = prompt("Qual é a sua primeira tarefa? ");
// let segundaTarefa = prompt("Qual é a sua segunda tarefa? ");
// let terceiraTarefa = prompt("Qual é a sua terceira tarefa? ");
// listaDeTarefas.push(primeiraTarefa, segundaTarefa, terceiraTarefa);
// console.log(listaDeTarefas);
// let tarefaRealizada = prompt("Qual tarefa você já realizou? 0, 1 ou 2? ");
// listaDeTarefas.splice(tarefaRealizada);
// console.log(listaDeTarefas);

// DESAFIO

//  Exercício 1

// let frase = prompt("Escreva uma frase: ");
// let palavras = frase.split(" ");
// for (let i = 0; i < palavras.length; i++) {
//   palavras[i] += "";
// }
// console.log(palavras);

// Exercício 2

let lista = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
const procuraAbacaxi = (elemento) => elemento == "Abacaxi";
console.log(
  `O índice é ${lista.findIndex(procuraAbacaxi)}, e o tamanho do array é ${
    lista.length
  }.`
);
