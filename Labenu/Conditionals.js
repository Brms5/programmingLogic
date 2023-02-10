const prompt = require("prompt-sync")();

// Exercício 1

// let idade = parseInt(prompt("Qual a sua idade? "));

// if (idade > 17) {
//   console.log("Você pode dirigir.");
// } else {
//   console.log("Você não pode dirigir.");
// }

// Exercício 2

// let turnoEstuda = prompt(
//   "Qual turno você estuda? M(matutino), V(vespertino) ou N(noturno)? "
// );

// if (turnoEstuda == "M") {
//   console.log("Bom Dia!");
// } else if (turnoEstuda == "V") {
//   console.log("Boa Tarde!");
// } else {
//   console.log("Boa Noite!");
// }

// Exercício 3

// switch (turnoEstuda) {
//   case "M":
//     console.log("Bom Dia!");
//     break;
//   case "V":
//     console.log("Boa Tarde!");
//     break;
//   case "N":
//     console.log("Boa Noite!");
//     break;
//   default:
//     console.log("Não estuda!");
// }

// Exercício 4

// let generoDoFilme = prompt("Qual o gênero de filme que vamos assistir? ");

// let precoDoIngresso = parseInt(prompt("Qual o o preço do ingresso? "));

// if (generoDoFilme == "fantasia" && precoDoIngresso < 15) {
//   let lanchinho = prompt("Qual lanchinho você vai comprar? ");
//   console.log(`Bom filme!`);
//   console.log(`Aproveite o seu ${lanchinho}.`);
// } else {
//   console.log("Escolha outro filme :(");
// }

// Desafio

let nomeCompleto = prompt("Qual o seu nome completo? ");
let tipoDeJogo = prompt(
  "Qual o tipo de jogo? IN(internacional) ou DO(doméstico)? "
);
let estapaDoJogo = prompt(
  "Qual a etapa do jogo? SF(semi-final), DT(decisão de terceiro) ou FI(final)? "
);
let categoria = parseInt(prompt("Qual a categoria? 1, 2, 3 ou 4? "));
let quantidadeIngressos = parseInt(prompt("Qual a quantidade de ingressos? "));

console.log(" ---Dados da compra--- ");
console.log(`Nome do cliente: ${nomeCompleto}`);

if (tipoDeJogo == "IN") {
  console.log(`Tipo do jogo: Internacional`);
} else {
  console.log(`Tipo do jogo: Nacional`);
}

if (estapaDoJogo == "SF") {
  console.log(`Etapa do jogo: Semi-final`);
} else if (estapaDoJogo == "DT") {
  console.log(`Etapa do jogo: Decisão de terceiro`);
} else {
  console.log(`Etapa do jogo: Final`);
}

console.log(`Categoria: ${categoria}`);
console.log(`Quantidade de Ingressos: ${quantidadeIngressos}`);

console.log(" ---Valores--- ");

let valorDoIngresso;
if (tipoDeJogo == "DO" && estapaDoJogo == "SF") {
  switch (categoria) {
    case 1:
      valorDoIngresso = 1320;
      console.log(`Valor do ingresso: R$ ${valorDoIngresso}`);
      break;
    case 2:
      valorDoIngresso = 800;
      console.log(`Valor do ingresso: R$ ${valorDoIngresso}`);
      break;
    case 3:
      valorDoIngresso = 550;
      console.log(`Valor do ingresso: R$ ${valorDoIngresso}`);
      break;
    case 4:
      valorDoIngresso = 220;
      console.log(`Valor do ingresso: R$ ${valorDoIngresso}`);
      break;
  }
} else if (tipoDeJogo == "DO" && estapaDoJogo == "DT") {
  switch (categoria) {
    case 1:
      valorDoIngresso = 660;
      console.log(`Valor do ingresso: R$ ${valorDoIngresso}`);
      break;
    case 2:
      valorDoIngresso = 440;
      console.log(`Valor do ingresso: R$ ${valorDoIngresso}`);
      break;
    case 3:
      valorDoIngresso = 330;
      console.log(`Valor do ingresso: R$ ${valorDoIngresso}`);
      break;
    case 4:
      valorDoIngresso = 170;
      console.log(`Valor do ingresso: R$ ${valorDoIngresso}`);
      break;
  }
} else if (tipoDeJogo == "DO" && estapaDoJogo == "FI") {
  switch (categoria) {
    case 1:
      valorDoIngresso = 1980;
      console.log(`Valor do ingresso: R$ ${valorDoIngresso}`);
      break;
    case 2:
      valorDoIngresso = 1320;
      console.log(`Valor do ingresso: R$ ${valorDoIngresso}`);
      break;
    case 3:
      valorDoIngresso = 880;
      console.log(`Valor do ingresso: R$ ${valorDoIngresso}`);
      break;
    case 4:
      valorDoIngresso = 330;
      console.log(`Valor do ingresso: R$ ${valorDoIngresso}`);
      break;
  }
}

let valorDoIngressoEmDolar;
if (tipoDeJogo == "IN" && estapaDoJogo == "SF") {
  switch (categoria) {
    case 1:
      valorDoIngressoEmDolar = 1320 / 4.1;
      console.log(`Valor do ingresso: U$ ${valorDoIngressoEmDolar}`);
      break;
    case 2:
      valorDoIngressoEmDolar = 800 / 4.1;
      console.log(`Valor do ingresso: U$ ${valorDoIngressoEmDolar}`);
      break;
    case 3:
      valorDoIngressoEmDolar = 550 / 4.1;
      console.log(`Valor do ingresso: U$ ${valorDoIngressoEmDolar}`);
      break;
    case 4:
      valorDoIngressoEmDolar = 220 / 4.1;
      console.log(`Valor do ingresso: U$ ${valorDoIngressoEmDolar}`);
      break;
  }
} else if (tipoDeJogo == "IN" && estapaDoJogo == "DT") {
  switch (categoria) {
    case 1:
      valorDoIngressoEmDolar = 660 / 4.1;
      console.log(`Valor do ingresso: U$ ${valorDoIngressoEmDolar}`);
      break;
    case 2:
      valorDoIngressoEmDolar = 440 / 4.1;
      console.log(`Valor do ingresso: U$ ${valorDoIngressoEmDolar}`);
      break;
    case 3:
      valorDoIngressoEmDolar = 330 / 4.1;
      console.log(`Valor do ingresso: U$ ${valorDoIngressoEmDolar}`);
      break;
    case 4:
      valorDoIngressoEmDolar = 170 / 4.1;
      console.log(`Valor do ingresso: U$ ${valorDoIngressoEmDolar}`);
      break;
  }
} else if (tipoDeJogo == "IN" && estapaDoJogo == "FI") {
  switch (categoria) {
    case 1:
      valorDoIngressoEmDolar = 1980 / 4.1;
      console.log(`Valor do ingresso: U$ ${valorDoIngressoEmDolar}`);
      break;
    case 2:
      valorDoIngressoEmDolar = 1320 / 4.1;
      console.log(`Valor do ingresso: U$ ${valorDoIngressoEmDolar}`);
      break;
    case 3:
      valorDoIngressoEmDolar = 880 / 4.1;
      console.log(`Valor do ingresso: U$ ${valorDoIngressoEmDolar}`);
      break;
    case 4:
      valorDoIngressoEmDolar = 330 / 4.1;
      console.log(`Valor do ingresso: U$ ${valorDoIngressoEmDolar}`);
      break;
  }
}

if (tipoDeJogo == "IN") {
  console.log(
    `Valor Total: U$ ${valorDoIngressoEmDolar * quantidadeIngressos}`
  );
} else {
  console.log(`Valor Total: R$ ${valorDoIngresso * quantidadeIngressos}`);
}
