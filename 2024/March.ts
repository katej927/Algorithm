// ['24.3.3] baekjoon 11047. 동전 0
const fs3 = require('fs')
const input3 = fs3.readFileSync('input.txt', 'utf8').trim().split('\n')

let [coinsCount, total] = input3[0].split(' ')
const coinsToNumber = input3.slice(1).map(Number).reverse()

const result = coinsToNumber.reduce((acc, cur) => {
  if (cur > total) return acc

  acc += Math.floor(total / cur)
  total %= cur
  return acc
}, 0)

console.log(result)

// ['24.3.9] baekjoon 11399. ATM
const fs9 = require('fs')
const input9 = fs9.readFileSync('input.txt', 'utf8').trim().split('\n')

const timeToNumber = input9[1].split(' ').map(Number)
let result9 = 0
timeToNumber
  .sort((a, b) => a - b)
  .reduce((acc, cur) => {
    acc += cur
    result9 += acc

    return acc
  }, 0)
console.log(result9)

// ['24.3.13] baekjoon 1541. 잃어버린 괄호
const fs13 = require('fs')
const input13 = fs13.readFileSync('input.txt', 'utf8').trim()

const splitedByMinus = input13.split('-')
console.log(
  splitedByMinus.reduce((acc, cur, idx) => {
    const splitedByPlus = cur.split('+').reduce((acc, cur) => Number(acc) + Number(cur))

    const numberedCur = Number(splitedByPlus)

    if (idx == 0) return numberedCur

    acc -= numberedCur
    return acc
  }, 0)
)

// ['24.3.17] baekjoon 2839. 설탕 배달
const fs17 = require('fs')
const input17 = fs17.readFileSync('input.txt', 'utf8').trim()

let target = Number(input17)
let count = 0
let flag = false

while (target >= 0) {
  if (target == 0 || target % 5 == 0) {
    count += Math.floor(target / 5)
    console.log(count)
    flag = true
    break
  }

  target -= 3
  count += 1
}

if (target < 0) {
  console.log(-1)
}

// ['24.3.20] baekjoon 16953. A → B
const fs20 = require('fs')
const input20 = fs20.readFileSync('input.txt', 'utf8').trim()

let [A, B] = input20.split(' ')
let count20 = 1
let flag20 = false

while (B > Number(A)) {
  if (Number(B) % 2) {
    if (B.toString().slice(-1) == 1) {
      B = String(B).slice(0, -1)
      count20++
    } else {
      console.log(-1)
      flag20 = true
      break
    }
  } else {
    B = B / 2
    count20++
  }
}

if (!flag20) {
  if (B == Number(A)) console.log(count20)
  else console.log(-1)
}

// ['24.3.23] baekjoon 1789. 수들의 합
const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8').trim()

let S = Number(input)
let count23 = 0
let sum = 0

while (sum <= S) {
  count23++
  sum += count23
}

console.log(count23)

// ['24.3.30] baekjoon 1946. 신입 사원
const fs30 = require('fs')
const input30 = fs30.readFileSync('input.txt', 'utf8').trim().split('\n')

const testCase = Number(input30[0])
let line = 1

for (let tc = 0; tc < testCase; tc++) {
  const n = Number(input30[line])
  let arr = []
  for (let i = line + 1; i <= line + n; i++) {}
}
