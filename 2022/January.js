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
var reversePrefix = function (word, ch) {
  word = word.split("");
  const chIdx = word.indexOf(ch) + 1;
  return [...word.splice(0, chIdx).reverse(), ...word].join("");
};
