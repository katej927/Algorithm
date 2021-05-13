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

/* ['21.5.9] leetCode 1662 */
var arrayStringsAreEqual = function (word1, word2) {
  const result = word1.join("") === word2.join("") ? true : false;
  return result;
};

/* ['21.5.10] leetCode 1290 */
var getDecimalValue = function (head, result) {
  if (!result) {
    result = "";
  }
  result = result + String(head.val);
  if (!head.next) {
    return parseInt(result, 2);
  }
  return getDecimalValue(head.next, result);
};

/* ['21.5.11] leetCode 1290 */
var countGoodTriplets = function (arr, a, b, c) {
  const result = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const absCondition1 = Math.abs(arr[i] - arr[j]) <= a;
        const absCondition2 = Math.abs(arr[j] - arr[k]) <= b;
        const absCondition3 = Math.abs(arr[i] - arr[k]) <= c;
        if (absCondition1 && absCondition2 && absCondition3) {
          result.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  return result.length;
};

/* ['21.5.13] leetCode 1534 */
var countGoodTriplets = function (array, a, b, c) {
  count = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const element2 = array[j];
      for (let k = j + 1; k < array.length; k++) {
        const element3 = array[k];
        if (
          Math.abs(element - element2) <= a &&
          Math.abs(element2 - element3) <= b &&
          Math.abs(element - element3) <= c
        ) {
          count++;
        }
      }
    }
  }
  return count;
};
