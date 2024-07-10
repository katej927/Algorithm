// ['24.7.9] baekjoon 2805. 나무 자르기
const fs240709 = require('fs')
const input240709 = fs240709.readFileSync('input.txt', 'utf8').trim().split('\n')

const [treeCount, targetHeight] = input240709[0].split(' ').map(Number)
const treeHeights = input240709[1].split(' ').map(Number)

let start = 0
let end = Math.max(...treeHeights)

while (start <= end) {
  const mid = Math.floor((start + end) / 2)

  let restHeight = 0

  for (let curTreeHeight of treeHeights) {
  }
}
