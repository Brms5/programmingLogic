function romanToIntTS(s: string): number {
 const romanMap: Map<string, number> = new Map();
    romanMap.set('I', 1);
    romanMap.set('V', 5);
    romanMap.set('X', 10);
    romanMap.set('L', 50);
    romanMap.set('C', 100);
    romanMap.set('D', 500);
    romanMap.set('M', 1000);

    let result = 0;
    let i = 0;
    while (i < s.length) {
        // Eu guardo o valor do número atual e do próximo número.
        const current = romanMap.get(s[i])!;
        const next = romanMap.get(s[i + 1])!;

        // Se o número atual for menor que o próximo, eu subtraio o número atual do próximo e adiciono o resultado ao resultado final porque o número atual é negativo.
        if (current < next) {
            result += next - current;
            i += 2;
        // Se o número atual for maior ou igual ao próximo, eu adiciono o número atual ao resultado final.
        } else {
            result += current;
            i += 1;
        }
    }
    return result;
};

console.log(romanToInt('III'));