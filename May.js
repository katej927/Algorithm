/* ['21.5.2] leetCode 1832 */
var checkIfPangram = function (sentence) {
  var a = [];
  for (var x of sentence) {
    if (a.indexOf(x) == -1) {
      a.push(x);
    }
  }
  return a.length == 26 ? true : false;
};

/* ['21.5.2] leetCode 1486 */
var xorOperation = function (n, start) {
  const result = new Array(n)
    .fill(0)
    .map((data, index) => start + 2 * index)
    .reduce((a, b) => a ^ b, 0);
  return result;
};
