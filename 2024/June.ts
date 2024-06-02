// ['24.6.1] baekjoon 1493. 박스 채우기
const fs1 = require('fs')
const input1 = fs1.readFileSync('input.txt', 'utf8').trim().split('\n')

const [length1, width, height] = input1[0].split(' ')
const boxSize = length1 * width * height

let count = 0

const cubeSizes = input1.slice(2).reverse()
