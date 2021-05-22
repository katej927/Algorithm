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

/* ['21.5.14] leetCode 1021 */
const removeOuterParentheses = (s, res = "", depth = 0) =>
  0 === s.length
    ? res
    : removeOuterParentheses(
        s.slice(1),
        res + (0 === depth || (1 === depth && ")" === s[0]) ? "" : s[0]),
        depth + ("(" === s[0] ? 1 : -1)
      );

/* ['21.5.16] leetCode 804 */
var uniqueMorseRepresentations = function (words) {
  const morseCode = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };
  const num = new Set();
  for (let item of words) {
    let str = "";
    for (let i = 0; i < item.length; i++) {
      str += morseCode[item[i]];
    }
    num.add(str);
  }
  return num.size;
};

/* ['21.5.19] leetCode 1859 */
var sortSentence = function (s) {
  s = s.split(" ").map((w) => [w.substr(0, w.length - 1), w.substr(-1)]);
  s.sort((a, b) => {
    return a[1].localeCompare(b[1]);
  });
  return s.map((w) => w[0]).join(" ");
};

/* ['21.5.20] leetCode 1704 */
var halvesAreAlike = function (s) {
  let n = s.length;
  let vowels = new Set();
  vowels.add("a");
  vowels.add("e");
  vowels.add("i");
  vowels.add("o");
  vowels.add("u");
  vowels.add("A");
  vowels.add("E");
  vowels.add("I");
  vowels.add("O");
  vowels.add("U");
  let count = 0;

  for (let i = 0; i < n / 2; i++) {
    if (vowels.has(s[i])) {
      count++;
    }
  }
  for (let i = n / 2; i < n; i++) {
    if (vowels.has(s[i])) {
      count--;
    }
  }
  return count === 0;
};

/* ['21.5.22] leetCode 1252 */
var oddCells = function (m, n, indices) {
  const matrix = new Array(m).fill(0).map(() => new Array(n).fill(0));

  indices.forEach((index) => {
    let row = index[0];
    let col = index[1];

    for (let i = 0; i < m; i++) {
      matrix[i][col]++;
    }
    for (let i = 0; i < n; i++) {
      matrix[row][i]++;
    }
  });

  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2) count++;
    }
  }
  return count;
};
