// O(n2)

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Input: [2, 7, 11, 15], target = 9
// Output: [0, 1]

const twoSum1 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (num + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum1([2, 7, 11, 15], 9)); // [0, 1]

// O(n)

const twoSum2 = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    console.log(map);
    const num = nums[i];
    const diff = target - num;
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(num, i);
  }
};

console.log(twoSum2([2, 7, 11, 15], 22)); // [1, 3]

// O(n2) - brute force solution - nested loop - not efficient
// O(n) - optimized solution - using hash map
// O(1) - space complexity - constant space complexity - not dependent on input size - only dependent on target value
// O(n) - space complexity - linear space complexity - dependent on input size
