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

// [21.9.25] programmers 완주하지 못한 선수
function solution(participant, completion) {
  let uniqueEls = new Set();
  let duplicatedEls = [];
  const seperateEls = participant.some((el) => {
    if (uniqueEls.has(el)) {
      duplicatedEls.push(el);
    } else {
      uniqueEls.add(el);
    }
    return;
  });

  const findResult = [...uniqueEls].filter((el) => {
    return !completion.includes(el);
  });
  return (findResult.length ? findResult : duplicatedEls).toString();
}
