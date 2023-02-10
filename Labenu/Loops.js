const prompt = require("prompt-sync")();

// Exercício 1

// let quantidadePets = parseInt(
//   prompt("Quantos animais de estimação você tem? ")
// );

// let listaPets = [];
// if (quantidadePets == 0) {
//   console.log("Que pena! Você pode adotar um pet!");
// } else {
//   for (let index = 0; index < quantidadePets; index++) {
//     let nomeDoPet = prompt(`Digite o nome do ${index + 1}º animal: `);
//     listaPets.push(nomeDoPet);
//   }
// }

// console.log(listaPets);

// Exercício 2

let arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let index = 0; index < arrayOriginal.length; index++) {
//   const element = arrayOriginal[index];
//   console.log(element);
// }

// for (let index = 0; index < arrayOriginal.length; index++) {
//   const element = arrayOriginal[index];
//   console.log(element / 10);
// }

// for (let index = 0; index < arrayOriginal.length; index++) {
//   const element = arrayOriginal[index];
//   if (element % 2 == 0) console.log(element);
// }

// for (let index = 0; index < arrayOriginal.length; index++) {
//   const element = arrayOriginal[index];
//   console.log(`O elemento do índex ${index} é: ${element}`);
// }

// let maiorNum;
// let menorNum;
// for (let index = 0; index < arrayOriginal.length; index++) {
//   const element = arrayOriginal[index];
//   if (maiorNum == undefined || menorNum == undefined) {
//     maiorNum = element;
//     menorNum = element;
//   }
//   if (maiorNum < element) maiorNum = element;
//   if (menorNum > element) menorNum = element;
// }
// console.log(`O maior número é ${maiorNum} e o menor é ${menorNum}. `);

// Desafios

let numeroEscolhido = Math.floor(Math.random() * 100) + 1;
// console.log(numeroEscolhido);
console.log("Vamos jogar!");

let numero;
let tentativas;
for (let index = 0; numero != numeroEscolhido; index++) {
  tentativas = index + 1;
  numero = parseInt(prompt("Tente acertar o número escolhido: "));
  if (numero != numeroEscolhido && numero > numeroEscolhido) {
    console.log(`Errrrrrrrou, é menor!`);
  } else if (numero != numeroEscolhido && numero < numeroEscolhido) {
    console.log(`Errrrrrrrou, é maior!`);
  } else if (numero == numeroEscolhido) {
    console.log(`Acertou!!!`);
  }
}
console.log(`O número de tentativas foi: ${tentativas}`);
