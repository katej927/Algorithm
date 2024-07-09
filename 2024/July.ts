// ['24.7.9] baekjoon 2805. 나무 자르기
const fs240709 = require('fs')
const input240709 = fs240709.readFileSync('input.txt', 'utf8').trim().split('\n')

const [treeCount, targetHeight] = input240709[0].split(' ').map(Number)
const treeHeights = input240709[1].split(' ').map(Number)

let startHeight = 1
let endHeight = Math.max(...treeHeights)
