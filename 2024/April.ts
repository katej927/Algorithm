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

// ['24.4.11] baekjoon 1931. 회의실 배정
const fs11 = require('fs')
const input11 = fs11.readFileSync('input.txt', 'utf8').trim().split('\n')

const totalCount = Number(input11[0])
const times = input11.slice(1).map((el) => el.split(' ').map(Number))
const sortedTimes = times.sort(([, aEnd], [, bEnd]) => aEnd - bEnd)

let minEnd = sortedTimes[0][1]
console.log(
  sortedTimes.reduce((acc, [curStart, curEnd]) => {
    if (minEnd <= curStart) {
      minEnd = curEnd
      acc++
    }
    return acc
  }, 1)
)