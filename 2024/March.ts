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

let count1 = 0

const portion = Math.floor(input17 / 5)
count1 += portion

const loop = (portion) => {
  if (portion == 0) {
    return -1
  } else if ((input17 - 5 * portion) % 3) {
    console.log('2번째 if', portion)
    count1 = 0
    return loop(portion - 1)
  } else {
    console.log('3번째 if', portion)
    count1 += portion
    count1 += (input17 - 5 * portion) / 3
    return count1
  }
}

console.log(loop(portion))
