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
