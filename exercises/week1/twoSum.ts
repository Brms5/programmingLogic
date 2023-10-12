function twoSum(nums: number[], target: number): number[] {
  // lista de números: nums = [2,7,11,15]
  // alvo: target = 9

  // Eu crio um Map para armazenar 2 números, o valor e seu index.
  const numMap: Map<number, number> = new Map();

  // Eu percorro a lista de números
  for (let i = 0; i < nums.length; i++) {
    // Para cada número, eu calculo o complemento. O complemento é o valor que falta para que a soma do número atual com o complemento seja igual ao alvo.
    const complement = target - nums[i];

    // Se o complemento já estiver no Map, eu retorno o index do complemento e o index atual.
    if (numMap.has(complement)) {
      return [numMap.get(complement)!, i];
    }

    // Se o complemento não estiver no Map, eu adiciono o número atual e seu index.
    numMap.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
