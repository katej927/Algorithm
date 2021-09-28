// ['21.9.19] leetcode 1920
var buildArray = function (nums) {
  const result = [];
  for (var i = 0; i < nums.length; i++) {
    result.push(nums[nums[i]]);
  }
  return result;
};

// ['21.9.20] leetcode 2011
var finalValueAfterOperations = function (operations) {
  let element = 0;

  operations.forEach((e) => {
    if (e.includes("--")) {
      element--;
    } else {
      element++;
    }
  });
  return element;
};

// ['21.9.21] leetcode 1929
var getConcatenation = function (nums) {
  return nums.concat(nums);
};

// ['21.9.22] leetcode 1480
const runningSum = (nums) => {
  nums.reduce((a, c, i, arr) => (nums[i] += a));
  return nums;
};

// ['21.9.23] leetcode 1108
var defangIPaddr = function (address) {
  return address.replace(/\./g, "[.]");
};

// [21.9.25] programmers 완주하지 못한 선수
function solution(participant, completion) {
  let uniqueEls = new Set();
  let duplicatedEls = [];
  const seperateEls = participant.some((el) => {
    if (uniqueEls.has(el)) {
      duplicatedEls.push(el);
    } else {
      uniqueEls.add(el);
    }
    return;
  });

  const findResult = [...uniqueEls].filter((el) => {
    return !completion.includes(el);
  });
  return (findResult.length ? findResult : duplicatedEls).toString();
}

// ['21.9.26] Refactor: programmers 완주하지 못한 선수
function solution(participant, completion) {
  // participant 에 대한 for문 순회를 위한 변수
  const total = participant.length;
  // 정답 변수
  var answer = "";

  // sort() : participant와 completion을 순서대로 정렬하여 비교하기 위함.
  participant.sort();
  completion.sort();

  // 순회하며 요소 하나씩 비교할 것
  for (let i = 0; i < total; i++) {
    // 정답(일치하지 않는 요소) 찾아냄 -> 배열의 요소를 순서대로 정렬했기 때문
    if (participant[i] !== completion[i]) {
      // answer(정답 변수)에 해당 요소를 담음
      answer = participant[i];

      // 정답 반환
      return answer;
    }
  }
}

// ['21.9.28] leetcode 1672
var maximumWealth = function (accounts) {
  // 내부 배열 요소들의 합에 대한 새 배열을 만들기 위한 map
  const outArrEl = accounts.map((outEls) =>
    // 내부 배열 요소들의 합
    outEls.reduce((stack, el) => stack + el, 0)
  );

  // 외부 배열 요소들 중 최댓값
  return Math.max(...outArrEl);
};

// ['21.9.29] leetcode 1470
var shuffle = function (nums, n) {
  let backNArr = nums.splice(n);
  let odd = 1;
  backNArr.forEach((el) => {
    nums.splice(odd, 0, el);
    odd += 2;
  });
  return nums;
};
