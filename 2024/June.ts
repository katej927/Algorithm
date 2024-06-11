// ['24.6.1] baekjoon 1493. 박스 채우기
const fs1 = require('fs')
const input1 = fs1.readFileSync('input.txt', 'utf8').trim().split('\n')

const [boxInfo] = input1

const [length1, width, height] = boxInfo.split(' ').map(Number)
const boxSize = length1 * width * height

let cubeCounts = new Array(19).fill(0)

for (let cubeInfo of input1.slice(2)) {
  const [idx, cubeCount] = cubeInfo.split(' ')
  cubeCounts[idx] = Number(cubeCount)
}

const nearestSize = (targetLength) => {
  let i = 1
  while (2 ** i <= targetLength) i++
  return i - 1
}

const size = Math.min(nearestSize(length1), nearestSize(width), nearestSize(height))

let usedVolume = 0
let countOfUsedCube = 0

for (let i = size; i >= 0; i--) {
  usedVolume *= 8
  let currentSize = 2 ** i

  let required =
    Math.floor(length1 / currentSize) * Math.floor(width / currentSize) * Math.floor(height / currentSize) - usedVolume

  const currentlyUsedCubeCount = Math.min(required, cubeCounts[i])
  countOfUsedCube += currentlyUsedCubeCount
  usedVolume += currentlyUsedCubeCount
}

console.log(usedVolume === boxSize ? countOfUsedCube : -1)
