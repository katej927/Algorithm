// ['22.2.2] Programmers H-Index
function solution(citations) {
  for (let h = Math.max(...citations); h >= 0; h--) {
    if (citations.filter((citation) => citation >= h).length >= h) return h;
  }
  return 0;
}
solution([3, 1, 1, 1, 4]);

// Refactor
function solution(citations) {
  let h = 0;
  while (h + 1 <= citations.sort((a, b) => b - a)[h]) h++;
  return h;
}

// Refactor 2
const solution = (citations) =>
  citations.sort((a, b) => b - a).filter((el, idx) => el >= idx + 1).length;
