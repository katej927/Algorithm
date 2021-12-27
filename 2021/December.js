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

// ['21.12.16] leetcode 1704
var halvesAreAlike = function (S) {
  let vowels = "aeiouAEIOU",
    mid = S.length / 2,
    res = 0;
  for (let i = 0, j = mid; i < mid; i++, j++) {
    res += vowels.includes(S[i]) - vowels.includes(S[j]);
  }
  return res === 0;
};

// ['21.12.17] leetcode 1370
var sortString = (s, result = "", isReverse = false) => {
  const sortedS = s.split("").sort();
  // s배열에서 중복되지 않는 값만 저장 (순서대로)
  const deduplicatedS = [...new Set(sortedS)].join("");
  // 기존 결과 값(문자)에 합침
  result += isReverse ? [...deduplicatedS].reverse().join("") : deduplicatedS;
  return s.length === 0
    ? result
    : sortString(
        sortedS
          .filter((letter, idx) => idx !== sortedS.indexOf(letter))
          .join(""),
        result,
        !isReverse
      );
};

// ['21.12.19] leetcode 1323
const maximum69Number = (num) => Number(num.toString().replace("6", "9"));

// ['21.12.20] leetcode 1941
var areOccurrencesEqual = (s) => {
  let count = s.split("").reduce((obj, cur) => {
    obj[cur] = (obj[cur] || 0) + 1;
    return obj;
  }, {});
  return new Set(Object.values(count)).size === 1;
};

// ['21.12.20] leetcode 1979
var findGCD = function (nums) {
  let factors = (num) =>
    [...Array(num)]
      .map((v, i) => i + 1)
      .reduce((acc, cur) => {
        num % cur === 0 ? acc.push(cur) : acc;
        return acc;
      }, []);
  return Math.max(
    ...factors(Math.max(...nums)).filter((maxNum) =>
      factors(Math.min(...nums)).includes(maxNum)
    )
  );
};

// ['21.12.22] leetcode 1572

// ver 1
var diagonalSum = (mat) =>
  mat.reduce((acc, cur, i) => (acc += cur[i] + cur[mat.length - 1 - i]), 0) -
  (mat.length % 2 === 1 ? mat[(mat.length - 1) / 2][(mat.length - 1) / 2] : 0);

// ver 2
var diagonalSum = (mat, sum = 0, j = mat[0].length - 1) => {
  for (let i = 0; i < mat.length; i++, j--) {
    if (i !== j) {
      sum += mat[i][j];
    }
    sum += mat[i][i];
  }
  return sum;
};
