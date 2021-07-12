/* ['21.7.1] leetCode 1710 */
var maximumUnits = function (boxTypes, truckSize) {
  let totalUnits = 0,
    sorted = boxTypes.sort((a, b) => b[1] - a[1]),
    boxesLeft = truckSize;
  sorted.forEach((val) => {
    if (val[0] < boxesLeft) {
      totalUnits += val[0] * val[1];
      boxesLeft -= val[0];
    } else if (val[0] >= boxesLeft && boxesLeft >= 0) {
      totalUnits += boxesLeft * val[1];
      boxesLeft -= val[0];
    }
  });
  return totalUnits;
};

/* ['21.7.2] leetCode 1460 */
var canBeEqual = function (target, arr) {
  return (
    target.sort((a, b) => a - b).join("") === arr.sort((a, b) => a - b).join("")
  );
};

/* ['21.7.3] leetCode 811 */
var subdomainVisits = function (cpdomains) {
  var oDomain = {};
  var iNumber = 0;
  var aResult = [];

  for (var i = 0; i < cpdomains.length; i++) {
    aDomainWithNumber = cpdomains[i].split(" ");
    iNumber = aDomainWithNumber[0];
    sEachDomain = aDomainWithNumber[1];
    aEachDomain = sEachDomain.split(".");

    var iEachDomainLength = aEachDomain.length;

    var sNewDomain = "";

    for (var j = iEachDomainLength - 1; j >= 0; j--) {
      var sWord = aEachDomain[j];

      if (j != iEachDomainLength - 1) {
        sNewDomain = "".concat(sWord, ".", sNewDomain);
      } else {
        sNewDomain = sWord;
      }

      if (!oDomain[sNewDomain]) {
        oDomain[sNewDomain] = parseInt(iNumber, 10);
      } else {
        iTotal = parseInt(iNumber, 10) + parseInt(oDomain[sNewDomain], 10);
        oDomain[sNewDomain] = iTotal;
      }
    }
  }
  aResult = Object.keys(oDomain).map((sDomain) => {
    return oDomain[sDomain] + " " + sDomain;
  });
  return aResult;
};

/* ['21.7.4] leetCode 1207 */
var uniqueOccurrences = function (arr) {
  var obj = {},
    obj1 = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  for (var key in obj) {
    if (obj1[obj[key]]) {
      return false;
    } else {
      obj1[obj[key]] = true;
    }
  }
  return true;
};

/* ['21.7.5] leetCode 1337 */
var kWeakestRows = function (mat, k) {
  const m = mat.length;

  const indexWithCnt = mat.map((arr, i) => {
    let count = 0;
    for (const n of arr) if (n) count++;
    return [i, count];
  });

  return indexWithCnt
    .sort((a, b) => a[1] - b[1])
    .slice(0, k)
    .map((el) => el[0]);
};

/* ['21.7.6] leetCode 1022 */
var sumRootToLeaf = function (root, val = "") {
  if (root == null) return 0;
  let result = 0;
  if (root.left != null) result += sumRootToLeaf(root.left, val + root.val);
  if (root.right != null) result += sumRootToLeaf(root.right, val + root.val);

  if (root.left == null && root.right == null) {
    return parseInt(val + root.val, 2);
  }

  return result;
};

/* ['21.7.7] leetCode 1403 */
var minSubsequence = function (nums) {
  let arr = [];
  let arrSum = 0;
  let sum = nums.reduce((acc, x) => x + acc, 0);
  nums.sort((a, b) => b - a);

  while (arrSum <= sum) {
    let curr = nums.shift();
    sum -= curr;
    arrSum += curr;
    arr.push(curr);
  }

  return arr;
};

/* ['21.7.8] leetCode 1880 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  const map = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
  };
  const first = parseInt(
    firstWord
      .split("")
      .map((char) => map[char])
      .join("")
  );
  const second = parseInt(
    secondWord
      .split("")
      .map((char) => map[char])
      .join("")
  );
  const target = parseInt(
    targetWord
      .split("")
      .map((char) => map[char])
      .join("")
  );
  return target == first + second;
};

/* ['21.7.9] leetCode 1047 */
var removeDuplicates = function (S) {
  const stack = [];

  for (const char of S) {
    stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
  }

  return stack.join("");
};

/* ['21.7.11] leetCode 852 */
var peakIndexInMountainArray = function (A) {
  return A.indexOf(Math.max(...A));
};

/* ['21.7.12] leetCode 977 */
var sortedSquares = function (nums) {
  return nums.map(squareNum).sort((l, r) => l - r);
};
