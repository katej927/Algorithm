// ['24.3.3] baekjoon 11047. 동전 0
const fs3 = require('fs')
const input3 = fs3.readFileSync('input.txt', 'utf8').trim().split('\n')

const [coinsCount, total] = input3[0].split(' ')
const coinsToNumber = input3.slice(1).map(Number)

let portions = Array(Number(coinsCount)).fill(0)

for (let i = coinsToNumber.length - 1; i >= 0; i--) {
  const currentCountingCoin = coinsToNumber[i]
  let portion = 0

  if (currentCountingCoin > total) {
    continue
  }
  for (let j = i; j >= 0; j--) {
    if (total % coinsToNumber[j] === 0) {
      portions[i] += Math.floor(total / coinsToNumber[j])
    }
  }
}
