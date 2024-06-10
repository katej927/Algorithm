// ['24.6.1] baekjoon 1493. 박스 채우기
const fs1 = require('fs')
const input1 = fs1.readFileSync('input.txt', 'utf8').trim().split('\n')

const [boxInfo] = input1

const [length1, width, height] = boxInfo.split(' ').map(Number)
const boxSize = length1 * width * height

const cubeCounts = input1.slice(2).map((cubeInfo) => {
  const [, cubeCount] = cubeInfo.split(' ')
  return Number(cubeCount)
})
