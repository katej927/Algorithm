/* ['21.8.1] leetCode 1217 */
var minCostToMoveChips = function (position) {
  const nOdd = position.reduce((odd, cur) => (cur % 2 ? odd + 1 : odd), 0);
  return Math.min(nOdd, position.length - nOdd);
};
