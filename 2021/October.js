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
