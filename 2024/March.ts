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
