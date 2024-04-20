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
const sortedTimes = times.sort(([aStart, aEnd], [bStart, bEnd]) => {
  if (aEnd === bEnd) return aStart - bStart
  return aEnd - bEnd
})

let minEnd = -1
console.log(
  sortedTimes.reduce((acc, [curStart, curEnd]) => {
    if (minEnd <= curStart) {
      minEnd = curEnd
      acc++
    }
    return acc
  }, 0)
)

// ['24.4.20] baekjoon 11509. 풍선 맞추기
const fs20 = require('fs')
const input20 = fs20.readFileSync('input.txt', 'utf8').trim().split('\n')

const count = Number(input20[0])
const heights = input20[1].split(' ').map(Number)

let arrowCount = 1
let curIdx
let curArrowHeight = count

while (curArrowHeight >= 1) {
  const poppedIdx = heights.findIndex((height) => height === curArrowHeight)
  if (poppedIdx > -1) {
    curArrowHeight--

    if (poppedIdx < curIdx) {
      arrowCount++
    }

    curIdx = poppedIdx
  }
}
