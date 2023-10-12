function isPalindrome(x) {
    // Transform the number into a string because we can't reverse a number
    var stringNumber = x.toString();
    // Reverse the string and join it back together to make it a number again
    var reversedStringNumber = stringNumber.split('').reverse().join('');
    // Compare the original number with the reversed number
    return x === parseInt(reversedStringNumber);
}

console.log(isPalindrome(111));
