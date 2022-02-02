// ['22.2.2] Programmers H-Index
function solution(citations) {
  for (let h = Math.max(...citations); h >= 0; h--) {
    if (citations.filter((citation) => citation >= h).length >= h) return h;
  }
  return 0;
}
