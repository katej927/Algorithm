// ['22.4.3] leetcode 2119
var isSameAfterReversals = function (num) {
  const reversing = (number) =>
    parseFloat([...number.toString()].reverse().join(""));
  return reversing(reversing(num)) === num;
};
isSameAfterReversals(1800);
