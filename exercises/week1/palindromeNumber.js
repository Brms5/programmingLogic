function isPalindromeTS(x) {
    var stringNumber = x.toString();
    var reversedStringNumber = stringNumber.split('').reverse().join('');
    return stringNumber === reversedStringNumber;
}
console.log(isPalindromeTS(1201));
