// ['21.11.2] leetcode 2006
var countKDifference = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      Math.abs(nums[i] - nums[j]) == k ? count++ : count;
    }
  }
  return count;
};
