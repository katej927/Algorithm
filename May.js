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

/* ['21.5.23] leetCode 1827 */
var minOperations = function (nums) {
  let answer = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] >= nums[i + 1]) {
      while (nums[i] >= nums[i + 1]) {
        nums[i + 1]++;
        answer++;
      }
    }
  }
  return answer;
};

/* ['21.5.24] leetCode 1725 */
var countGoodRectangles = function (rectangles) {
  let minVal = [];
  rectangles.forEach((el) => {
    minVal.push(Math.min(...el));
  });
  let count = 0;
  let maxVal = Math.max(...minVal);
  for (let i = 0; i < minVal.length; i++) {
    if (minVal[i] === maxVal) count++;
  }
  return count;
};

/* ['21.5.25] leetCode 1323 */
var maximum69Number = function (num) {
  return String(num).replace("6", "9");
};

/* ['21.5.26] leetCode 1572 */
var diagonalSum = function (arr) {
  let answer = 0;
  const arrLen = arr.length;
  const arrHalf = Math.floor(arrLen / 2);
  for (let i = 0; i < arrLen; i++) {
    answer += arr[i][i] + arr[i][arrLen - 1 - i];
  }
  return arrLen % 2 === 1 ? answer - arr[arrHalf][arrHalf] : answer;
};

/* ['21.5.27] leetCode 1309 */
var freqAlphabets = function (s) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let number = "12346789";
  let digitNumber = [
    "10#",
    "11#",
    "12#",
    "13#",
    "14#",
    "15#",
    "16#",
    "17#",
    "18#",
    "19#",
    "20#",
    "21#",
    "22#",
    "23#",
    "24#",
    "25#",
    "26#",
  ];

  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === "#") {
      let digit = "";
      digit += s[i] + s[i + 1] + s[i + 2];
      let index = digitNumber.indexOf(digit) + 9;
      answer += alphabet[index];
      i += 2;
    } else if (s[i] >= 1 && s[i] <= 9) {
      answer += alphabet[s[i] - 1];
    }
  }
  return answer;
};

/* ['21.5.28] leetCode 1370 */
var sortString = function (s) {
  const arr = s.split("").sort((x, y) => {
    if (x < y) return -1;
    if (x > y) return 1;
  });

  return getMaxOrMin(arr).join("");
};

function getMaxOrMin(arr) {
  if (!arr.length) return [];
  const ret = [];
  const deleteIndex = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      ret.push(arr[i]);
      deleteIndex.push(i);
    }
  }

  return [
    ...ret,
    ...getMaxOrMin(
      arr.filter((v, index) => deleteIndex.indexOf(index) === -1).reverse()
    ),
  ];
}

/* ['21.5.29] leetCode 1436 */
var destCity = function (paths) {
  let takeoffCities = [];
  let destinationCities = [];
  function pathCounter(array) {
    for (let i = 0; i < array.length; i++) {
      i % 2 == 0
        ? takeoffCities.push(array[i])
        : destinationCities.push(array[i]);
    }
  }
  for (let i = 0; i < paths.length; i++) {
    pathCounter(paths[i]);
  }
  let theCity = "";
  for (let i = 0; i < destinationCities.length; i++) {
    let matchCounter = 0;
    for (let j = 0; j < takeoffCities.length; j++) {
      if (destinationCities[i] === takeoffCities[j]) {
        matchCounter++;
      }
    }
    if (matchCounter === 0) {
      theCity = destinationCities[i];
    }
  }
  return theCity;
};
