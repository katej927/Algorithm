/* ['21.4.1] LeetCode 1684*/
const countConsistentStrings = (allowed, words, chars = new Set(allowed)) =>
  words.filter((word) => [...word].every((char) => chars.has(char))).length;

/*['21.4.2] LeetCode 1688*/
var numberOfMatches = function (n) {
  let collectResult = 0;
  let matches = n;

  while (matches != 1) {
    if (matches % 2 !== 0) {
      collectResult += (matches - 1) / 2;
      matches = (matches + 1) / 2;
    } else {
      collectResult += matches / 2;
      matches = matches / 2;
    }
  }

  return collectResult;
};

/* ['21.4.3] leetCode 1480 */
let runningSum = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    nums[i] = sum;
  }
  return nums;
};

/* ['21.4.4] leetCode 1108*/
var defangIPaddr = function (address) {
  return address.split(".").join("[.]");
};

/* ['21.4.5] leetCode 1732*/
var largestAltitude = function (gain) {
  let newArr = [0];
  let newgain = gain;

  for (let i = 0; i < gain.length; i++) {
    newArr.push(gain[i] + newArr[i]);
  }
  return Math.max(...newArr);
};

/* ['21.4.5] leetCode 1266*/
var minTimeToVisitAllPoints = function (points) {
  let result = 0;

  for (let i = 0; i < points.length - 1; i++) {
    let firstIdxGap = Math.abs(points[i][0] - points[i + 1][0]);
    let secondIdxGap = Math.abs(points[i][1] - points[i + 1][1]);

    result += Math.max(firstIdxGap, secondIdxGap);
  }

  return result;
};

/* ['21.4.6] leetCode 832 */
var flipAndInvertImage = function (image) {
  return image.map((eachImg) =>
    eachImg.reverse().map((el) => (el === 0 ? 1 : 0))
  );
};

/* ['21.4.6] leetCode 1295 */
var findNumbers = function (nums) {
  const newArr = nums.filter((num) => {
    return num.toString().length % 2 === 0;
  });
  return newArr.length;
};

/* ['21.4.6] leetCode 1816 */
var truncateSentence = (s, k) => s.split(" ").slice(0, k).join(" ");

/* ['21.4.7] Programmers K번째 수 */
function solution(array, commands) {
  var answer = [];

  commands.map((cmd) => {
    const sliceSorted = array.slice(cmd[0] - 1, cmd[1]).sort(function (a, b) {
      return a - b;
    });

    answer.push(sliceSorted[cmd[2] - 1]);
  });
  return answer;
}

/* ['21.4.7] Programmers 서울에서 김서방 찾기 */
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}

/* ['21.4.7] Programmers 2021 KAKAO BLIND RECRUITMENT 신규 아이디 추천 */
function solution(new_id) {
  // 1~3단계
  new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, "")
    .replace(/\.+/g, ".");
}

/* ['21.4.8] Programmers 가운데 글자 가져오기 */
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

/* ['21.4.8] Programmers 모의고사 */
const solution = (answers) => {
  let students = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let answer = [];

  for (let student of students) {
    answer.push(
      answers.reduce(
        (acc, cur, idx) => (
          cur == student[idx % student.length] ? acc++ : acc, acc
        ),
        0
      )
    );
  }
  return answer.reduce(
    (acc, cur, idx) => (
      cur === Math.max(...answer) ? acc.push(idx + 1) : acc, acc
    ),
    []
  );
};

/* ['21.4.10] leetCode 1431 */
var kidsWithCandies = function (candies, extraCandies) {
  const result = candies.map((data) => data + extraCandies);
  return result.map((data) => (data >= Math.max(...candies) ? true : false));
};

/* ['21.4.10] leetCode 771 */
var numJewelsInStones = function (J, S) {
  let result = 0;
  for (let i = 0; i < J.length; i++) {
    for (let k = 0; k < S.length; k++) {
      if (J[i] === S[k]) result++;
    }
  }
  return result;
};

/* ['21.4.14] leetCode 1512 */
var numIdenticalPairs = function (nums) {
  const indexArr = nums.map((data, index) => [index, data]);
  let result = 0;
  for (let i = 0; i < indexArr.length - 1; i++) {
    for (let j = i + 1; j < indexArr.length; j++) {
      if (indexArr[i][1] === indexArr[j][1]) {
        result++;
      }
    }
  }
  return result;
};

/* ['21.4.15] leetCode 1672 */
var maximumWealth = function (accounts) {
  const result = accounts.map((data) => data.reduce((acc, curr) => acc + curr));
  return Math.max(...result);
};

/* ['21.4.17] leetCode 1470 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

/* ['21.4.22] leetCode 1528 */
var restoreString = function (s, indices) {
  const result = Array.from({ length: s.length }).fill(0);
  indices.forEach((data, index) => (result[data] = [...s][index]));
  return result.join("");
};

/* ['21.4.23] leetCode 1812 */
var squareIsWhite = function (coordinates) {
  let values = coordinates.split("");
  let obj = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
  };
  let value = obj[values[0]] + parseInt(values[1]);
  return isEven(value);
};

var isEven = (num) => {
  return num % 2 === 0;
};

/* ['21.4.24] leetCode 1342 */
var numberOfSteps = function (num) {
  let reduceCount = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
      ++reduceCount;
    } else {
      num -= 1;
      ++reduceCount;
    }
  }
  return reduceCount;
};

/* ['21.4.26] leetCode 1281 */
var subtractProductAndSum = function (n) {
  const result = [...String(n)].map((data) => parseInt(data, 10));
  const pDigit = result.reduce((a, b) => a * b);
  const sDigit = result.reduce((a, b) => a + b);
  return pDigit - sDigit;
};

/* ['21.4.27] leetCode 1313 */
var decompressRLElist = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i = i + 2) {
    let temp = new Array(nums[i]).fill(nums[i + 1]);
    result.push(...temp);
  }
  return result;
};

/* ['21.4.28] leetCode 1678 */
var interpret = function (command) {
  const re1 = new RegExp("\\((al)\\)", "g");
  const re2 = new RegExp("\\(()\\)", "g");
  const result = command.replace(re1, "al").replace(re2, "o");
  return result;
};

/* ['21.4.29] leetCode 1720 */
var decode = function (encoded, first) {
  const result = new Array(encoded.length).fill(0);
  result[0] = first;
  for (let i = 0; i < encoded.length; i++) {
    result[i + 1] = encoded[i] ^ result[i];
  }
  return result;
};

/* ['21.4.30] leetCode 1773 */
var countMatches = function (items, ruleKey, ruleValue) {
  let itemsType = 0;
  switch (ruleKey) {
    case "type":
      itemsType = 0;
      break;
    case "color":
      itemsType = 1;
      break;
    case "name":
      itemsType = 2;
      break;
    default:
      itemsType = 0;
  }
  const result = items.filter((data) => data[itemsType] === ruleValue).length;
  return result;
};
