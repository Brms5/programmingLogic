const prompt = require("prompt-sync")();

// Exercício 1

// let idade = prompt("Qual a sua idade? ");
// let idadeAmigo = prompt("Qual a idade do seu melhor amigo? ");

// console.log(
//   `Sua idade é maior do que a do seu melhor amigo? -> ${idade > idadeAmigo}`
// );
// console.log(idade - idadeAmigo);

// Exercício 2

// let numeroPar = prompt("Insira um número par: ");
// console.log(numeroPar % 2);

// Exercício 3

// let idade = prompt("Qual a sua idade? ");
// console.log(`${idade * 12} meses`);
// console.log(`${idade * 12 * 30} dias`);
// console.log(`${idade * 12 * 30 * 24} horas`);

// Exercício 4

// let primeiroNumero = parseFloat(prompt("Insira um número: "));
// let segundoNumero = parseFloat(prompt("Insira outro número: "));
// console.log(
//   `O primeiro numero é maior que segundo? -> ${primeiroNumero > segundoNumero}`
// );
// console.log(
//   `O primeiro numero é igual ao segundo? -> ${primeiroNumero == segundoNumero}`
// );
// console.log(
//   `O primeiro numero é divisível pelo segundo? -> ${
//     primeiroNumero % segundoNumero == 0
//   }`
// );
// console.log(
//   `O segundo numero é divisível pelo primeiro? -> ${
//     segundoNumero % primeiroNumero == 0
//   }`
// );

// DESAFIO

// Exercício 1

// let kelvin = (77 - 32) * (5 / 9) + 273.15;
// console.log(`${kelvin}K`);

// let fahrenheit = 80 * (9 / 5) + 32;
// console.log(`${fahrenheit}F`);

// const celcius = parseInt(prompt("Insira um valor de graus Celsius: "));

// let fahrenheit2 = celcius * (9 / 5) + 32;
// console.log(`${fahrenheit2}F`);

// let kelvin2 = (fahrenheit2 - 32) * (5 / 9) + 273.15;
// console.log(`${kelvin2}K`);

// Exercício 2

// let custoQUilowattHora = 0.05;

// let desconto = 0.15;

// let custoResidencia = 280 * custoQUilowattHora;
// console.log(`${custoResidencia * (1 - desconto)} reais`);

// Exercício 3

let lb = parseInt(prompt("Quantos lbs você quer converter para kgs? "));
let lbToKg = lb * 0.453592;
console.log(`${lb}lb equivalem a ${lbToKg}kg`);

let oz = 10.5;
let ozToKg = oz * 0.0283495;
console.log(`10.5oz equivalem a ${ozToKg}kg`);

let mi = 100;
let miToM = mi * 1609.34;
console.log(`100mi equivalem a ${miToM}m`);

let ft = 50;
let ftToM = ft * 0.3048;
console.log(`50ft equivalem a ${ftToM}m`);

let gal = 103.56;
let galToL = gal * 3.78541;
console.log(`103.56gal equivalem a ${galToL}l`);

let xic = 450;
let xicToL = xic * 0.24;
console.log(`450xic. equivalem a ${xicToL}l`);
