// ['22.3.6] leetcode 2185
var prefixCount = function (words, pref) {
  return words.reduce((acc, cur) => (cur.indexOf(pref) ? acc : (acc += 1)), 0);
};
