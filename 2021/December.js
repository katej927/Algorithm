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
