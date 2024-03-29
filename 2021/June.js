/* ['21.6.1] leetCode 1450 */
var busyStudent = function (startTime, endTime, queryTime) {
  const timeLength = startTime.length;
  let busyStudentCount = 0;

  for (let i = 0; i < timeLength; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      busyStudentCount++;
    }
  }

  return busyStudentCount;
};

/* ['21.6.2] leetCode 1304 */
const sumZero = (n) => {
  let number = n,
    flag = false;
  const result = [];
  for (let i = 0; i < n; i++) {
    if (flag) {
      result.push(-number);
      number--;
      flag = false;
    } else {
      result.push(number);
      flag = true;
    }
  }
  if (result.length % 2 === 1) {
    result[result.length - 1] = 0;
  }
  return result;
};

/* ['21.6.4] leetCode 728 */
var selfDividingNumbers = function (left, right) {
  function div(num) {
    let arr = num.toString().split("");
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
      if (num % arr[i] === 0) {
        answer.push(1);
      }
    }
    return answer.length === arr.length ? true : false;
  }
  let answer = [];
  for (let i = left; i <= right; i++) {
    if (div(i)) answer.push(i);
  }
  return answer;
};

/* ['21.6.8] leetCode 617 */
var mergeTrees = function (t1, t2) {
  //
  if (t1 === null) return t2;
  if (t2 === null) return t1;
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};

/* ['21.6.10] leetCode 1351 */
var countNegatives = function (grid) {
  let result = 0;
  for (let i of grid) {
    for (let j = i.length - 1; j >= 0; j--) {
      if (i[j] < 0) result++;
      if (i[j] >= 0) break;
    }
  }
  return result;
};

/* ['21.6.11] leetCode 905 */
var sortArrayByParity = function (nums) {
  let even = [];
  let odd = [];
  for (let x of nums) {
    if (x % 2) odd.push(x);
    else even.push(x);
  }
  let answer = [...even, ...odd];
  return answer;
};

/* ['21.6.12] leetCode 1837 */
var sumBase = function (n, k) {
  // for n = 36, k = 5, below will convert 36 (base 10) into 121 (base 5)
  var resultStr = n.toString(k);
  var sum = 0;
  // now iterate the string with each character and keep adding the numbers
  for (var i = 0; i < resultStr.length; i++) {
    sum += +resultStr[i];
  }
  return sum;
};

/* ['21.6.13] leetCode 897 */
var increasingBST = function (root) {
  var arr = [];
  // 중위순회
  inorder(root, arr);

  var newRoot = new TreeNode(0);
  var curNode = newRoot;

  for (var i = 0; i < arr.length; i++) {
    curNode.right = new TreeNode(arr[i]);
    curNode = curNode.right;
  }

  return newRoot.right;
};

/* ['21.6.14] leetCode 961 */
var repeatedNTimes = function (A) {
  var expectedRepeatingTImes = A.length;
  var arrayCountObj = {};
  for (var i = 0; i < expectedRepeatingTImes; i++) {
    if (!arrayCountObj["arr_" + A[i]]) {
      arrayCountObj["arr_" + A[i]] = 0;
    }
    arrayCountObj["arr_" + A[i]] = arrayCountObj["arr_" + A[i]] + 1;
    if (arrayCountObj["arr_" + A[i]] == expectedRepeatingTImes / 2) {
      return A[i];
    }
  }
};

/* ['21.6.15] leetCode 1475 */
var finalPrices = function (prices) {
  let arr = [];
  let min = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[min] >= prices[i]) {
      arr.push(prices[min] - prices[i]);
      min++;
      i = min;
    } else if (i === prices.length - 1) {
      arr.push(prices[min]);
      min++;
      i = min;
    }
  }
  arr.push(prices[prices.length - 1]);
  return arr;
};

/* ['21.6.16] leetCode 1748 */
var sumOfUnique = function (nums) {
  var unique = [...new Set(nums)];
  var map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], { value: 0 });
    } else {
      map.set(nums[i], { value: 1 });
    }
  }
  var sum = 0;
  for (let i = 0; i < unique.length; i++) {
    if (map.get(unique[i]).value == 1) sum -= unique[i];
    sum += unique[i];
  }

  return sum;
};

/* ['21.6.17] leetCode 589 */
var preorderTraversal = function (root) {
  var array = [];
  if (!(root == null)) {
    array.push(root.val);
    preorderTraversal(root.left);
    preorderTraversal(root.right);
  }
  return array;
};

/* ['21.6.18] leetCode 657 */
var judgeCircle = function (moves) {
  // record the number of characters appeared udrl
  var uNum = 0,
    dNum = 0,
    rNum = 0,
    lNum = 0;

  // string traversal moves
  for (var i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "L":
        lNum++;
        break;
      case "R":
        rNum++;
        break;
      case "U":
        uNum++;
        break;
      case "D":
        dNum++;
        break;
    }
  }

  // If equal number of left and right and up and down the number of times equal returns true, false otherwise
  if (lNum === rNum && dNum === uNum) {
    return true;
  } else {
    return false;
  }
};

/* ['21.6.19] leetCode 657 */
var postorder = function (root) {
  const res = [];
  traverse(root);
  return res;

  function traverse(node) {
    if (!node) return;
    for (child of node.children) {
      traverse(child);
    }
    res.push(node.val);
  }
};

/* ['21.6.20] leetCode 1768 */
var mergeAlternately = function (word1, word2) {
  let merged = "";

  const longer = Math.max(word1.length, word2.length);

  for (let i = 0; i < longer; i++) {
    if (word1[i] && word2[i]) {
      merged = merged.concat(word1[i], word2[i]);
    } else if (!word1[i]) {
      merged = merged.concat(word2[i]);
    } else if (!word2[i]) {
      merged = merged.concat(word1[i]);
    }
  }
  return merged;
};

/* ['21.6.21] leetCode 561 */
var arrayPairSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < nums.length; i += 2) {
    result += nums[i];
  }
  return result;
};

/* ['21.6.22] leetCode 700 */
var searchBST = function (root, val) {
  let result = null;
  function search(node) {
    if (!node) {
      return;
    }

    if (node.val === val) {
      result = node;
      return;
    }

    search(node.left);
    search(node.right);
  }

  search(root);
  return result;
};

/* ['21.6.23] leetCode 461 */
var hammingDistance = function (x, y) {
  function quyufa(num) {
    var arr = [];
    while (num !== 0) {
      arr.push(num % 2);
      num = Math.floor(num / 2);
    }
    return arr;
  }

  var arrX = quyufa(x),
    arrY = quyufa(y),
    result = 0;

  while (arrX.length !== arrY.length) {
    var shortArr = arrX.length > arrY.length ? arrY : arrX;
    shortArr.push(0);
  }

  for (var i = 0; i < arrX.length; i++) {
    if (arrX[i] !== arrY[i]) {
      result++;
    }
  }

  return result;
};

/* ['21.6.24] leetCode 461 */
var countBalls = function (lowLimit, highLimit) {
  let box = {};
  for (let i = lowLimit; i <= highLimit; ++i) {
    let n = getSum(i);
    box[n] = (box[n] || 0) + 1;
  }
  let max = 0;
  for (let k in box) {
    if (box[k] > max) {
      max = box[k];
    }
  }
  return max;
};

/* ['21.6.25] leetCode 1742 */
var countBalls = function (lowLimit, highLimit) {
  var l = Array(lowLimit - 1).fill(0);
  for (let i = lowLimit; i <= highLimit; i++) {
    var sum = sumOfDigits(i);
    if (l.length < sum) {
      l.push(1);
    } else {
      l[sum - 1] += 1;
    }
  }
  return Math.max(...l);
};
function sumOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

/* ['21.6.27] leetCode 557 */
var reverseWords = function (s) {
  let arr = s.split(" ");
  let result = arr.map((item) => {
    return item.split("").reverse().join("");
  });
  return result.join(" ");
};

/* ['21.6.29] leetCode 1051 */
var heightChecker = function (heights) {
  let movedStudents = 0;
  const heightsOrigin = [...heights];
  heights.sort((a, b) => {
    if (a > b) {
      return 1;
    }

    if (a < b) {
      return -1;
    }

    return 0;
  });

  for (let i = 0; i < heights.length; i++) {
    if (heightsOrigin[i] != heights[i]) {
      movedStudents++;
    }
  }

  return movedStudents;
};

/* ['21.6.30] leetCode 933 */
RecentCounter.prototype.ping = function (t) {
  if (0 < this.queue.length) {
    while (3000 < t - this.queue[0]) {
      this.queue.shift();
    }
  }

  this.queue.push(t);

  return this.queue.length;
};
