// ['22.3.6] leetcode 2185
// ver 1
var prefixCount = function (words, pref) {
  return words.reduce((acc, cur) => (cur.indexOf(pref) ? acc : (acc += 1)), 0);
};

// ver 2
var prefixCount = function (words, pref) {
  return words.reduce(
    (acc, cur) => (cur.startsWith(pref) ? (acc += 1) : acc),
    0
  );
};

// ['22.3.18] leetcode 728
var selfDividingNumbers = function (left, right) {
  let answer = [];
  for (let i = left; i <= right; i++) {
    if (![...(i + "")].map((el) => i % el === 0).includes(false)) {
      answer.push(i);
    }
  }
  return answer;
};

// ['22.3.27] leetcode 2206
// ver 1
var divideArray = function (numbers) {
  while (numbers.length) {
    let sameIdx = numbers.indexOf(numbers.shift());
    if (sameIdx === -1) return false;
    numbers.splice(sameIdx, 1);
  }
  return true;
};

// ver 2
var divideArray = function (nums) {
  let set = new Set();
  for (num of nums) {
    if (set.has(num)) set.delete(num);
    else set.add(num);
  }
  return set.size === 0;
};

divideArray([
  7, 15, 4, 4, 15, 2, 16, 6, 14, 15, 15, 14, 16, 19, 9, 16, 3, 9, 12, 13, 7, 4,
  18, 7, 3, 17, 1, 11, 7, 2, 20, 13, 16, 17, 2, 9, 12, 19, 12, 3, 3, 2, 11, 6,
  16, 1, 19, 16, 9, 4, 15, 1, 13, 7, 18, 3,
]);
