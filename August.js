/* ['21.8.1] leetCode 1217 */
var minCostToMoveChips = function (position) {
  const nOdd = position.reduce((odd, cur) => (cur % 2 ? odd + 1 : odd), 0);
  return Math.min(nOdd, position.length - nOdd);
};

/* ['21.8.2] leetCode 944 */
var minDeletionSize = function (strs) {
  const strLen = strs[0].length;
  let count = 0;
  let i = 0;
  while (i < strLen) {
    for (let j = 0; j < strs.length - 1; j++) {
      console.log(strs[j][i]);
      if (strs[j].charCodeAt(i) > strs[j + 1].charCodeAt(i)) {
        count++;
        break;
      }
    }
    i++;
  }
  return count;
};

/* ['21.8.4] leetCode 1380 */
var luckyNumbers = function (matrix) {
  const n = matrix[0].length;
  const m = matrix.length;
  let res = [];
  for (let i = 0; i < m; i++) {
    let minIndex = matrix[i].indexOf(Math.min(...matrix[i]));
    let isMax = true;
    for (let j = 0; j < m; j++) {
      if (matrix[j][minIndex] > matrix[i][minIndex]) {
        isMax = false;
        break;
      }
    }
    if (isMax) {
      res.push(matrix[i][minIndex]);
    }
  }
  return res;
};

/* ['21.8.4] leetCode 1502 */
var canMakeArithmeticProgression = function (arr) {
  if (arr.length == 2) return true;

  var sortedArray = arr.sort(function (a, b) {
    return a - b;
  });

  var diffValue = sortedArray[1] - sortedArray[0];

  for (var i = 2; i < arr.length; i++) {
    if (sortedArray[i] - sortedArray[i - 1] !== diffValue) {
      return false;
    }
  }
  return true;
};
