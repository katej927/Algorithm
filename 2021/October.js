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

// ['21.10.5] leetcode 1720
var decode = function (encoded, first) {
  const result = [first];
  encoded.forEach((el, i) => result.push(result[i] ^ el));
  return result;
};

// ['21.10.18] Algorithm
const tmp = (data) => {
  let AddedWeight = 0;
  for (const line of data) {
    if (line.includes("kg")) {
      const kgToG = line.split("kg")[0] * 1000;
      AddedWeight += kgToG;
    } else if (line.includes("g")) {
      const g = Number(line.split("g")[0]);
      AddedWeight += g;
    }
  }
  return Math.floor(AddedWeight / 100 - 1);
};

// ['21.10.20] leetcode 1281
var subtractProductAndSum = function (n) {
  const eachNum = Array.from(String(n), Number);
  const add = eachNum.reduce((acc, cur) => acc + cur);
  const multiply = eachNum.reduce((acc, cur) => acc * cur);
  return multiply - add;
};

// ['21.10.21] leetcode 1313
var decompressRLElist = function (nums) {
  return nums.reduce(
    (acc, cur, i) =>
      i % 2 !== 0 ? [...acc, ...Array(nums[i - 1]).fill(cur)] : acc,
    []
  );
};

// ['21.10.22] leetcode 1342
var numberOfSteps = function (num) {
  return !num ? 0 : numberOfSteps(num % 2 === 0 ? num / 2 : num - 1) + 1;
};

// ['21.10.23] leetcode 1389
var createTargetArray = function (nums, index) {
  let result = [];
  for (let i = 0; i < nums.length; i++) result.splice(index[i], 0, nums[i]);
  return result;
};

// ['21.10.24] leetcode 1678
var interpret = function (command) {
  return command.replaceAll("()", "o").replaceAll("(al)", "al");
};

// ['21.10.26] leetcode 1221
var balancedStringSplit = function (s) {
  let isSameQuant = 0;
  let balanceCount = 0;

  s.split("").forEach((el) => {
    el === "R" ? (isSameQuant += 1) : (isSameQuant -= 1);

    if (isSameQuant === 0) {
      balanceCount += 1;
    }
  });
  return balanceCount;
};

// ['21.10.29] leetcode 1720 (Refactor)
var decode = function (encoded, first) {
  let result = [first];
  encoded.forEach((el, i) => {
    result.push(el ^ result[i]);
  });
  return result;
};

// ['21.10.30] leetcode 1773 (Refactor)
var countMatches = function (items, ruleKey, ruleValue) {
  let keyIdx = {
    type: 0,
    color: 1,
    name: 2,
  };

  return items.reduce(
    (acc, cur) => (cur[keyIdx[ruleKey]] === ruleValue ? acc + 1 : acc),
    0
  );
};

// ['21.10.31] leetcode 2037
var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => b - a);
  students.sort((a, b) => b - a);
  return students.reduce((a, c, i) => (a += Math.abs(c - seats[i])), 0);
};
