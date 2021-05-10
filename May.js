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

/* ['21.5.3] leetCode 1486 */
var xorOperation = function (n, start) {
  const result = new Array(n)
    .fill(0)
    .map((data, index) => start + 2 * index)
    .reduce((a, b) => a ^ b, 0);
  return result;
};

/* ['21.5.5] leetCode 938 */
var rangeSumBST = function (root, L, R) {
  let d = (r) =>
    !r ? 0 : (L <= r.val && r.val <= R ? r.val : 0) + d(r.left) + d(r.right);
  return d(root);
};

/* ['21.5.6] leetCode 1844 */
var replaceDigits = function (s) {
  const chs = s.split("");
  const len = chs.length;

  for (let i = 1; i < len; i += 2) {
    const prevCh = chs[-1 + i];
    let chCode = s.charCodeAt(-1 + i);
    let ch = s[i];
    const offset = Number(ch);

    chCode += offset;

    ch = String.fromCharCode(chCode);
    chs[i] = ch;
  }

  let result = chs.join("");
  return result;
};

/* ['21.5.8] leetCode 1662 */
var arrayStringsAreEqual = function (word1, word2) {
  const result = word1.join("") === word2.join("") ? true : false;
  return result;
};

/* ['21.5.8] leetCode 1290 */
let result = 0
    while (head) {
        result = result * 2 + head.val;
        head = head.next
    }
    return result
};