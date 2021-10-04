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

// ['21.10.4] leetcode 1528
var restoreString = function (s, indices) {
  const resArr = [];
  for (let j = 0; j < s.length; j++) {
    resArr[indices[j]] = s[j];
  }
  return resArr.join("");
};
