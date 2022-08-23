// ['22.8.17] leetcode 1304
var sumZero = function (n) {
  let result = []
  let total = 0

  for (let i = 1; i < n; i++) {
    result.push(i)
    total -= i
  }

  result.push(total)
  return result
}

// ['22.8.23] 프로그래머스 코딩테스트 실전 대비 모의고사 1차 문제집_1번 문제
function solution(X, Y) {
  let YInArr = Y.split('')
  let commonNums = []

  X.split('').forEach((str) => {
    let commonIdxInY = YInArr.indexOf(str)
    if (commonIdxInY > -1) commonNums.push(str)
    YInArr.splice(commonIdxInY, 1)
  })

  const isAll0 = commonNums.every((num) => num === '0')

  if (!commonNums.length) return '-1'
  else if (isAll0) return '0'
  else return commonNums.sort((a, b) => b - a).join('')
}
