const prompt = require("prompt-sync")();

// Exercício 1

const pessoa = {
  nome: "Bruno",
  apelidos: ["Brunao", "Sei lá", "Qualquer coisa"],
};

const imprimeSaida = (nome, apelidos) => {
  console.log(
    `Eu sou ${nome}, mas pode me chamar de: ${apelidos[0]}, ${apelidos[1]}, ${apelidos[2]}, ${apelidos[3]}, ${apelidos[4]}, ${apelidos[5]}.`
  );
};

const pessoaNova = {
  nome: "Bruno",
  apelidos: [...pessoa.apelidos, "Brunao2", "Sei lá2", "Qualquer coisa2"],
};

// imprimeSaida(pessoa.nome, pessoaNova.apelidos);

// Exercício 2

const primeiroPerfil = {
  nome: "Bruno",
  idade: 30,
  profissão: "Desenvolvedor",
};

const segundoPerfil = {
  nome: "Ana",
  idade: 35,
  profissão: "Designer",
};

const imprimePerfil = (perfil) => {
  return [
    `${perfil.nome}, ${perfil.nome.length}, ${perfil.idade}, ${perfil.profissão}, ${perfil.profissão.length}`,
  ];
};

// console.log(imprimePerfil(primeiroPerfil));

// Exercício 3

const carrinho = [];

const primeiroSacolao = {
  nome: "laranja",
  disponibilidade: true,
};

const segundoSacolao = {
  nome: "uva",
  disponibilidade: true,
};

const terceiroSacolao = {
  nome: "morango",
  disponibilidade: true,
};

const imprimeSacolao = (primeiraFruta, segundaFruta, terceiraFruta) => {
  carrinho.push(primeiraFruta, segundaFruta, terceiraFruta);
};

// imprimeSacolao(primeiroSacolao, segundoSacolao, terceiroSacolao);
// console.log(carrinho);

// DESAFIO

// Exercício 1

const imprimeObjetivo = () => {
  const nome = prompt("Qual é o seu nome? ");
  const idade = parseInt(prompt("Qual é a sua idade? "));
  const profissao = prompt("Qual é a sua profissão? ");

  const perfil = {
    nome,
    idade,
    profissao,
  };

  return perfil;
};

// console.log(imprimeObjetivo());

// Exercício 2

const primeiroFilme = {
  nome: "Skyfall",
  anoDeLançamento: 2012,
};

const segundoFilme = {
  nome: "Forrest Gump",
  anoDeLançamento: 1994,
};

const imprimeFilme = (primeiroFilme, segundoFilme) => {
  console.log(
    `O primeiro filme foi lançado antes do segundo? ${
      primeiroFilme.anoDeLançamento < segundoFilme.anoDeLançamento
    }`
  );
  console.log(
    `O primeiro filme foi lançado no mesmo ano do segundo? ${
      primeiroFilme.anoDeLançamento == segundoFilme.anoDeLançamento
    }`
  );
};

// console.log(imprimeFilme(primeiroFilme, segundoFilme));

// Exercício 3

const controleEstoque = (fruta) => {
  const sacolao = {
    nome: fruta.nome,
    disponibilidade: !fruta.disponibilidade,
  };

  return sacolao;
};

console.log(controleEstoque(segundoSacolao));
