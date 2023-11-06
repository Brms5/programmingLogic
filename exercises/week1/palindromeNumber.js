// Exercício Palindrome Number - LeetCode se refere a verificar se um número é palíndromo. Um número é palíndromo se ele for igual ao seu reverso.

function isPalindrome(x) {
    var stringNumber = x.toString();
    var reversedStringNumber = stringNumber.split('').reverse().join('');
    return stringNumber === reversedStringNumber;
}
console.log(isPalindrome(1201));
