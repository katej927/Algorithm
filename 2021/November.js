// ['21.11.2] leetcode 2006
var countKDifference = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      Math.abs(nums[i] - nums[j]) == k ? count++ : count;
    }
  }
  return count;
};

// ['21.11.3] programmers 로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  const minCount = lottos.filter((num) => win_nums.includes(num)).length;
  const zeroCount = lottos.filter((num) => !num).length;
  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}

// ['21.11.4] leetcode 1486
var xorOperation = function (n, start) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    result ^= start + 2 * i;
  }
  return result;
};

// ['21.11.8] leetcode 1859
var sortSentence = function (s) {
  return s
    .split(" ")
    .sort((a, b) => a[a.length - 1] - b[b.length - 1])
    .map((el) => el.slice(0, el.length - 1))
    .join(" ");
};

// ['21.11.9] programmers 기능개발
function solution(progresses, speeds) {
  let result = [0];
  let devDays = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );
  let maxDay = devDays[0];

  for (let i = 0, j = 0; i < devDays.length; i++) {
    if (devDays[i] <= maxDay) {
      result[j] += 1;
    } else {
      maxDay = devDays[i];
      result[++j] = 1;
    }
  }
  return result;
}
