// ['24.4.6] baekjoon 13305. 주유소
const fs6 = require('fs')
const input6 = fs6.readFileSync('input.txt', 'utf8').trim().split('\n')

const cityCount = Number(input6[0])
const distances = input6[1].split(' ').map(BigInt)
const prices: bigint[] = input6[2].split(' ').map(BigInt)

let minPrice = prices[0]
let totalPrice = BigInt(0)

for (let i = 0; i < cityCount - 1; i++) {
  const curPrice = prices[i]
  if (curPrice < minPrice) {
    minPrice = curPrice
  }

  totalPrice += distances[i] * minPrice
}

console.log(totalPrice.toString())
