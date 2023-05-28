// [Inflearn] 자바스크립트 알고리즘 문제풀이 입문_4. 완전탐색 (블루투포스)_1.자릿수의 합
function solution(n, arr) {
  const summedArr = arr.map((el) =>
    el
      .toString()
      .split('')
      .reduce((a, b) => a + Number(b), 0)
  )
  const maxNum = Math.max(...summedArr)

  const result = summedArr.reduce((acc, cur, idx) => (cur === maxNum && acc < arr[idx] ? arr[idx] : acc), 0)

  return result
}

let arr = [128, 460, 603, 40, 521, 137, 123]
console.log(solution(7, arr))
