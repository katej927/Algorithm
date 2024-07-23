// ['24.7.9] baekjoon 2805. 나무 자르기
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n')

const [treeCount, targetHeight] = input[0].split(' ').map(Number)
const treeHeights = input[1].split(' ').map(Number)

let start = 0
let end = Math.max(...treeHeights)
let result = 0

while (start <= end) {
  const mid = Math.floor((start + end) / 2)
  let restHeight = 0

  for (let curTreeHeight of treeHeights) {
    const newRestHeight = mid <= curTreeHeight ? curTreeHeight - mid : 0
    restHeight += newRestHeight
  }

  if (targetHeight <= restHeight) {
    result = mid
    start = mid + 1
  } else {
    end = mid - 1
  }
}

console.log(result)

// ['24.7.15] baekjoon 1654. 랜선 자르기
const fs15 = require('fs')
const input15 = fs15.readFileSync('input.txt', 'utf8').trim().split('\n')

const [k, n] = input15[0].split(' ').map(Number)
const cableLengths = input.slice(1).map(Number)

let start15 = 1
let end15 = Math.max(...cableLengths)
let result15 = 1

while (start15 <= end15) {
  const mid = Math.floor((start15 + end15) / 2)

  const cableTotalCount = cableLengths.reduce((acc, cur) => {
    acc += Math.floor(cur / mid)
    return acc
  }, 0)

  if (n <= cableTotalCount) {
    result15 = mid
    start15 = mid + 1
  } else {
    end15 = mid - 1
  }
}

console.log(result15)

// ['24.7.15] baekjoon 10816. 숫자 카드 2
const fs16 = require('fs')
const input16 = fs16.readFileSync('input.txt', 'utf8').trim().split('\n')

const [cardsLength, cardsStr, , targetNumbersStr] = input16
const sortedCards = cardsStr
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b)
const targetNumbers = targetNumbersStr.split(' ').map(Number)

const lowerBound = (targetNumber) => {
  let tmpStartIdx = 0
  let tmpEndIdx = Number(cardsLength)

  while (tmpStartIdx < tmpEndIdx) {
    const midIdx = Math.floor((tmpStartIdx + tmpEndIdx) / 2)
    const mid = sortedCards[midIdx]

    if (targetNumber <= mid) {
      tmpEndIdx = midIdx
    } else {
      tmpStartIdx = midIdx + 1
    }
  }

  return tmpEndIdx
}

const upperBound = (targetNumber) => {
  let tmpStartIdx = 0
  let tmpEndIdx = Number(cardsLength)

  while (tmpStartIdx < tmpEndIdx) {
    const midIdx = Math.floor((tmpStartIdx + tmpEndIdx) / 2)
    const mid = sortedCards[midIdx]

    if (targetNumber < mid) {
      tmpEndIdx = midIdx
    } else {
      tmpStartIdx = midIdx + 1
    }
  }

  return tmpEndIdx
}

const countRange = (targetNumber) => {
  const startIdx = lowerBound(targetNumber)
  const endIdx = upperBound(targetNumber)

  return endIdx - startIdx
}

const result16 = targetNumbers.reduce((acc, cur) => {
  return (acc += countRange(cur) + ' ')
}, '')

console.log(result16.trimEnd())

// ['24.7.23] baekjoon 18353. 병사 배치하기
const fs23 = require('fs')
const input23 = fs23.readFileSync('input.txt', 'utf8').trim()

const [, capasStr] = input23.split('\n')
const capas = capasStr.split(' ').map(Number)
const descifiedCapas = capas.sort((a, b) => b - a)
console.log(capas.sort((a, b) => b - a))

for (let i = 0; i < descifiedCapas.length; i++) {
  for (let j = 0; j < capas.length; j++) {}
}
