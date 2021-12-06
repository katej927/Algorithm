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
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((alphabet) => sentence.search(alphabet) >= 0);
};
