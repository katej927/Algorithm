// ['23.5.28] Inflearn : 자바스크립트 알고리즘 문제풀이 입문_4. 완전탐색 (블루투포스)_1.자릿수의 합
function solution1(n, arr) {
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
console.log(solution1(7, arr))

// ['23.5.29] Inflearn : 자바스크립트 알고리즘 문제풀이 입문_8. 재귀함수와 완전탐색(DFS:깊이우선탐색)_1. 재귀함수와 스택프레임
function solution2(n) {
  const DFS = (L) => {
    if (L === 0) return
    else {
      DFS(L - 1)
      console.log(L)
    }
  }

  DFS(n)
}

solution2(3)
