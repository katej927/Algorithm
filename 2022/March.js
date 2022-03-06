// ['22.3.6] leetcode 2185
// ver 1
var prefixCount = function (words, pref) {
  return words.reduce((acc, cur) => (cur.indexOf(pref) ? acc : (acc += 1)), 0);
};

// ver 2
var prefixCount = function (words, pref) {
  return words.reduce(
    (acc, cur) => (cur.startsWith(pref) ? (acc += 1) : acc),
    0
  );
};
