function isPalindromeTS(x: number): boolean {
    const stringNumber = x.toString();
    const reversedStringNumber = stringNumber.split('').reverse().join('');
    return stringNumber === reversedStringNumber;
}

console.log(isPalindromeTS(1201));