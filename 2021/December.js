// ['21.12.1] leetcode 2089
var targetIndices = function (nums, target) {
  return nums
    .sort((a, b) => a - b)
    .reduce((acc, cur, idx) => (cur === target ? [...acc, idx] : acc), []);
};

// ['21.12.2] leetcode 1588
var sumOddLengthSubarrays = function (arr) {
  let addIdx = 1,
    resultArr = [];
  let replay = (addIdx) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr.slice(i, i + addIdx).length === addIdx) {
        resultArr.push(arr.slice(i, i + addIdx));
      }
    }
  };
  while (addIdx <= arr.length) {
    replay(addIdx);
    addIdx += 2;
  }
  return resultArr.flat().reduce((a, c) => a + c, 0);
};

// ['21.12.3] leetcode 1662
var arrayStringsAreEqual = function (word1, word2) {
  return word1.join("") === word2.join("");
};

// ['21.12.5] leetcode 1290
const getDecimalArr = (head) => {
  let a = [];
  while (head) {
    a.push(head.val);
    head = head.next;
  }
  return a;
};
const getDecimalValue = (head) =>
  getDecimalArr(head)
    .reverse()
    .reduce((acc, cur, i) => (acc += cur * 2 ** i), 0);

// ['21.12.6] leetcode 1832
var checkIfPangram = function (sentence) {
  return new Set(sentence).size === 26;
};

// ['21.12.7] leetcode 1913
var maxProductDifference = function (nums) {
  nums.sort((a, b) => a - b);

  return nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1];
};

// ['21.12.8] leetcode 1844
var replaceDigits = function (s) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  return s
    .split("")
    .reduce((acc, cur, idx) =>
      !isNaN(cur)
        ? (acc += alphabets[alphabets.indexOf(s[idx - 1]) + Number(cur)])
        : (acc += cur)
    );
};

// ['21.12.9] leetcode 804
var uniqueMorseRepresentations = function (words) {
  const alphabets = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };

  return new Set(
    words.map((word) =>
      word.split("").reduce((acc, cur) => (acc += alphabets[cur]), "")
    )
  ).size;
};

// ['21.12.11] leetcode 1021
var removeOuterParentheses = (s, res = "", depth = 0) =>
  s.length === 0
    ? res
    : removeOuterParentheses(
        s.slice(1),
        res + (depth === 0 || (depth === 1 && s[0] === ")") ? "" : s[0]),
        depth + (s[0] === "(" ? 1 : -1)
      );

// ['21.12.13] leetcode 1725
var countGoodRectangles = function (rectangles) {
  const selectedSquare = rectangles.map((inArr) => Math.min(...inArr));
  return selectedSquare.reduce(
    (acc, cur) => (Math.max(...selectedSquare) === cur ? (acc += 1) : acc),
    0
  );
};

// ['21.12.15] leetcode 1967
var numOfStrings = (patterns, word) =>
  patterns.reduce((acc, cur) => (word.includes(cur) ? (acc += 1) : acc), 0);
