// ['21.10.2] leetcode 1512
const nums = [1, 2, 3];
var numIdenticalPairs = function (nums) {
  let count = 0;
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }
  return count;
};

numIdenticalPairs(nums);

// ['21.10.3] leetcode 771
var numJewelsInStones = function (J, S) {
  const jewels = new Set(J);
  return [...S].reduce((arr, cur) => arr + jewels.has(cur), 0);
};
