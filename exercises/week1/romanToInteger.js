function romanToInt(s) {
    var romanMap = new Map();
    romanMap.set('I', 1);
    romanMap.set('V', 5);
    romanMap.set('X', 10);
    romanMap.set('L', 50);
    romanMap.set('C', 100);
    romanMap.set('D', 500);
    romanMap.set('M', 1000);

    var result = 0;
    var i = 0;
    while (i < s.length) {
        // Eu guardo o valor do número atual e do próximo número.
        var current = romanMap.get(s[i]);
        var next = romanMap.get(s[i + 1]);
        // Se o número atual for menor que o próximo, eu subtraio o número atual do próximo e adiciono o resultado ao resultado final.
        if (current < next) {
            result += next - current;
            // i += 2 porque eu já usei o número atual e o próximo número.
            i += 2;

            // Se o número atual for maior ou igual ao próximo, eu adiciono o número atual ao resultado final.
        }
        else {
            // Se o número atual for o último número, eu adiciono o número atual ao resultado final.
            // += é igual a result = result + current
            result += current;

            // Se o número atual não for o último número, eu adiciono o número atual ao resultado final e passo para o próximo número.
            i += 1;

        }
    }
    return result;
};
console.log(romanToInt('MCMXCIV'));
