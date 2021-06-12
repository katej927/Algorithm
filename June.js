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
