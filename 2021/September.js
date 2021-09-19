// ['21.9.19] leetcode 1920
var buildArray = function (nums) {
  const result = [];
  for (var i = 0; i < nums.length; i++) {
    result.push(nums[nums[i]]);
  }
  return result;
};
