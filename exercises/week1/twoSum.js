// Problema twoSum do LeetCode se refere a encontrar dois números que somados resultam em um alvo.

function twoSum2(nums, target) {
  // Eu crio um Map para armazenar 2 números, o valor e seu index.
  var numMap = new Map();
  // Eu percorro a lista de números
  for (var i = 0; i < nums.length; i++) {
    // Para cada número, eu calculo o complemento. O complemento é o valor que falta para que a soma do número atual com o complemento seja igual ao alvo.
    var complement = target - nums[i];
    // Se o complemento já estiver no Map, eu retorno o index do complemento e o index atual.
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    // Se o complemento não estiver no Map, eu adiciono o número atual e seu index.
    numMap.set(nums[i], i);
  }
  return [];
}
console.log(twoSum2([1, 4, 5, 8], 9));

// Estudar Map

let map = new Map();
map.set("1", "str1"); // uma chave de string
map.set(1, "num1"); // uma chave de número
map.set(true, "bool1"); // uma chave booleana
console.log(map.get(1)); // 'num1'
console.log(map.values());
console.log(map.keys());
console.log(map.entries());

// Diferença entre Map e Object
// Um objeto tem um protótipo, então há chaves padrão no mapa que poderiam colidir com as chaves do usuário se eles não forem tomados cuidado.
// O Map preserva a ordem de inserção, ao contrário de um objeto padrão:
map = new Map();
map.set("banana", 1);
map.set("laranja", 2);
map.set("maçã", 3);
console.log(map.keys()); // banana, laranja, maçã

