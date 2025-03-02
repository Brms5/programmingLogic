// Number of 1 Bits
// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
//
// Example 1:
//
// Input: n = 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
// Example 2:
//
// Input: n = 00000000000000000000000010000000
// Output: 1
// Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

// O(1) - constant time complexity - dependent on input size
// O(1) - space complexity - constant space complexity - not dependent on input size
const numberOf1Bits = (n) => {
  let count = 0;
  while (n) {
    count += n & 1;
    n >>>= 1;
  }
  return count;
};

console.log(numberOf1Bits(11)); // 3
console.log(numberOf1Bits(128)); // 1nu
console.log(numberOf1Bits(4294967293)); // 31
console.log(numberOf1Bits(4294967295)); // 32
console.log(numberOf1Bits(0)); // 0
console.log(numberOf1Bits(1)); // 1
console.log(numberOf1Bits(2)); // 1
console.log(numberOf1Bits(3)); // 2