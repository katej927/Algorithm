// ['21.9.19] leetcode 1920
var buildArray = function (nums) {
  const result = [];
  for (var i = 0; i < nums.length; i++) {
    result.push(nums[nums[i]]);
  }
  return result;
};

// ['21.9.20] leetcode 2011
var finalValueAfterOperations = function (operations) {
  let element = 0;

  operations.forEach((e) => {
    if (e.includes("--")) {
      element--;
    } else {
      element++;
    }
  });
  return element;
};

// ['21.9.21] leetcode 1929
var getConcatenation = function (nums) {
  return nums.concat(nums);
};

// ['21.9.22] leetcode 1480
const runningSum = (nums) => {
  nums.reduce((a, c, i, arr) => (nums[i] += a));
  return nums;
};

// ['21.9.23] leetcode 1108
var defangIPaddr = function (address) {
  return address.replace(/\./g, "[.]");
};
