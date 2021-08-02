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
