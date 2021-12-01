// ['21.12.1] leetcode 2089
var targetIndices = function (nums, target) {
  return nums
    .sort((a, b) => a - b)
    .reduce((acc, cur, idx) => (cur === target ? [...acc, idx] : acc), []);
};
