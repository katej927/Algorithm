// ['24.7.9] baekjoon 2805. 나무 자르기
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n')

const [treeCount, targetHeight] = input[0].split(' ').map(Number)
const treeHeights = input[1].split(' ').map(Number)

let start = Math.min(...treeHeights)
let end = Math.max(...treeHeights)
let result

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
