// ['22.1.10] programmers 체육복
function solution(n, lost, reserve) {
  const realLost = lost.filter((el) => !reserve.includes(el)).sort();

  const realReserve = reserve.filter((el) => !lost.includes(el)).sort();

  const lostCount = realLost.filter(
    (el) =>
      !hasAnotherReserve(el - 1, realReserve) &&
      !hasAnotherReserve(el + 1, realReserve)
  ).length;

  return n - lostCount;
}

function hasAnotherReserve(lost, reserve) {
  const idx = reserve.indexOf(lost);
  if (idx === -1) {
    return false;
  } else {
    reserve.splice(idx, 1);
    return true;
  }
}

// ['22.1.16] programmers 위장
function solution(clothes) {
  // 객체에 종류별로 갯수를 카운팅한다.
  // 경우의 수(곱의 법칙)를 통해 모든 경우의 수를 구한다.
  // cur + 1에서 1의 의미: 입지 않았던 경우의 수
  // reduce에서 -1을 한 이유: 모두 입지 않았던 경우의 수를 빼준다.

  let count = {};
  clothes.forEach(([name, type]) => {
    let existingNum = count[type] || 0;
    count[type] = existingNum + 1;
  });
  return Object.values(count).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}

// ['22.1.18] leetcode 2000
// ver 1
var reversePrefix = function (word, ch) {
  word = word.split("");
  const chIdx = word.indexOf(ch) + 1;
  return [...word.splice(0, chIdx).reverse(), ...word].join("");
};

// ver 2
var reversePrefix = function (word, ch) {
  const chPosition = word.indexOf(ch);
  return (
    word
      .slice(0, chPosition + 1)
      .split("")
      .reverse()
      .join("") + word.slice(chPosition + 1)
  );
};

// ['22.1.21] leetcode 1309
var freqAlphabets = function (s, sToArr = [...s]) {
  return sToArr.reduce(
    (acc, cur, i) =>
      (acc +=
        sToArr[i + 2] === "#"
          ? (sToArr.splice(i, 3, sToArr[i] + sToArr[i + 1]),
            String.fromCharCode(96 + ~~sToArr[i]))
          : String.fromCharCode(96 + ~~cur)),
    ""
  );
};
freqAlphabets("1326#");

// ['22.1.24] leetcode 1464
const maxProduct = (nums) =>
  nums
    .sort((a, b) => a - b)
    .splice(-2)
    .reduce((i, j) => (i - 1) * (j - 1));
maxProduct([1, 5, 4, 5]);

// ['22.1.26] leetcode 1436
// ver 1
var destCity = function (paths) {
  const count = paths.reduce((acc, cur, i) => {
    cur.forEach((el) => (acc[el] = acc[el] ? 2 : 1));
    return acc;
  }, {});
  return paths.find((el) => count[el[1]] === 1)[1];
};
destCity([
  ["B", "C"],
  ["D", "B"],
  ["C", "A"],
]);

// ver 2
const destCity = function (paths) {
  const pathsToMap = new Map(paths);

  for (let value of pathsToMap.values()) {
    if (!pathsToMap.has(value)) return value;
  }
};

// ver 3
const destCity = (paths) => {
  const start = paths.reduce((acc, cur) => acc.add(cur[0]), new Set());
  return paths.find((path) => !start.has(path[1]))[1];
};

// ['22.1.30] leetcode 1812
var squareIsWhite = function (coordinates) {
  return coordinates.charCodeAt(0) % 2 !== coordinates[1] % 2;
};
squareIsWhite("c7");
