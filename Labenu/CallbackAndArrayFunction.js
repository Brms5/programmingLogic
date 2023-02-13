const prompt = require("prompt-sync")();

// Exercício 1

const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

let petsName = [];
pets.map((pet) => {
  petsName.push(pet.nome);
});
// console.log(petsName);

let petsSalsicha = pets.filter((pet) => {
  return pet.raca == "Salsicha";
});
// console.log(petsSalsicha);

pets
  .filter((pet) => {
    return pet.raca == "Poodle";
  })
  .map((item) => {
    item[
      "mensagem"
    ] = `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`;
    return item;
  });

// console.log(pets);

// Exercício 2

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

let produtosNome = produtos.map((produto) => {
  return produto.nome;
});
// console.log(produtosNome);

// let produtosNomeEDesconto = produtos.map((produto) => {
//   delete produto["categoria"];
//   produto["preco"] = produto.preco * 0.95;
//   return produto;
// });
// console.log(produtosNomeEDesconto);

// let produtosCategoriaBebidas = produtos.filter((produto) => {
//   return produto.categoria == "Bebidas";
// });
// console.log(produtosCategoriaBebidas);

// produtos
//   .filter((produto) => {
//     return produto.nome.includes("Ypê");
//   })
//   .map((item) => {
//     let nome = item.nome;
//     let preco = item.preco;
//     Object.keys(item).forEach((key) => delete item[key]);
//     item["frase"] = `Compre ${nome} por ${preco}`;
//   });
// console.log(produtos);

// Desafio

const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
];

// const nomeDosPokemons = pokemons
//   .map((pokemon) => {
//     return pokemon.nome;
//   })
//   .sort();

// console.log(nomeDosPokemons);
const tipoDosPokemons = pokemons
  .map((pokemon) => {
    return pokemon.tipo;
  })
  .filter((value, index, self) => self.indexOf(value) === index);
console.log(tipoDosPokemons);

// const filteredArr = arr.filter(el => {
//     const duplicate = seen.has(el.id);
//     seen.add(el.id);
//     return !duplicate;
//   });
