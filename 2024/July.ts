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

let start16 = 0
let end16 = cardsLength - 1
let result16 = ''
