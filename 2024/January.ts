// ['24.1.3] baekjoon 2438. 별 찍기 - 1

const fs1 = require('fs')
const input = fs1.readFileSync('/dev/stdin').toString()

const inputToNum = Number(input)

let result = ''
for (let i = 1; i <= inputToNum; i++) {
  result += '*'.repeat(i) + '\n'
}

console.log(result)

// ['24.1.4] baekjoon 15552. 빠른 A+B
const fs240104 = require('fs')
const input240104 = fs240104.readFileSync('input.txt').toString().split('\n')

let result5 = ''
for (let i = 1; i <= Number(input240104[0]); i++) {
  const [firstNum, secondNum] = input240104[i].split(' ')
  result5 += Number(firstNum) + Number(secondNum) + '\n'
}

console.log(result5)

// ['24.1.7] baekjoon 10818. 최소, 최대
const fs240107 = require('fs')
const input240107 = fs240107.readFileSync('/dev/stdin').toString().split('\n')

const nums = input240107[1].split(' ').map(Number)
const { min, max } = nums.reduce(
  (acc, cur) => {
    if (cur < acc.min) acc['min'] = cur
    else if (cur > acc.max) acc['max'] = cur

    return acc
  },
  { min: nums[0], max: nums[0] }
)

console.log(`${min} ${max}`)

// ['24.1.11] baekjoon 2562. 최댓값
const fs240111 = require('fs')
const input240111 = fs240111.readFileSync('input.txt').toString().trim().split('\n')

const convertedNums = input240111.map(Number)

const maxNum = Math.max(...convertedNums)
const index = convertedNums.indexOf(maxNum) + 1

console.log(maxNum + '\n' + index)

// ['24.1.12] baekjoon 3052. 나머지
const fs = require('fs')
const input240112 = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const nums240112 = input240112.map(Number)

const remainders = nums.reduce((acc, cur) => {
  acc.add(cur % 42)

  return acc
}, new Set())

console.log(remainders.size)

// ['24.1.13] baekjoon 4344. 평균은 넘겠지
const fs240113 = require('fs')
const input240113 = fs240113.readFileSync('input.txt').toString().split('\n')

const nums240113 = input240113.map((num) => num.split(' '))

let result240113 = ''

for (let numIdx = 1; numIdx < nums.length; numIdx++) {
  const scores = nums[numIdx]
  let totalScores = 0

  for (let scoreIdx = 1; scoreIdx < scores.length; scoreIdx++) {
    totalScores += Number(scores[scoreIdx])
  }

  const average = totalScores / Number(scores[0])
  let countAboveAverage = 0

  for (let scoreIdx = 1; scoreIdx < scores.length; scoreIdx++) {
    const score = scores[scoreIdx]
    if (average < score) {
      countAboveAverage++
    }
  }

  const ratio = (countAboveAverage / Number(scores[0])) * 100
  result240113 += ratio.toFixed(3) + '%' + '\n'
}
console.log(result240113)
