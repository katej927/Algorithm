// ['23.6.3] Inflearn : 자바스크립트 알고리즘 문제풀이 입문_8. 재귀함수와 완전탐색(DFS:깊이우선탐색)_2. 재귀함수를 이용한 이진수 출력
// solution 1
function convertToBinary1(n: number) {
  const iterate: (quotient: number, remainder: string) => string = (quotient: number, remainder: string) =>
    quotient < 2 ? `${quotient}${remainder}` : iterate(Math.floor(quotient / 2), `${quotient % 2}${remainder}`)

  return iterate(n, '')
}

convertToBinary1(11)

// solution 2
function convertToBinary2(n: number) {
  let answer: string = ''
  const iterate = (n: number) => {
    if (n === 0) return
    else {
      iterate(Math.floor(n / 2))
      answer += n % 2
    }
  }
  iterate(n)
  return answer
}

convertToBinary2(11)
