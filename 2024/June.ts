// ['24.6.1] baekjoon 1493. 박스 채우기
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().split('\n')

const [boxSize, NumberOfCubeType] = input

let [length1, width, height] = boxSize.split(' ').map(Number)

const cubeList = input.slice(2)
const cubes = cubeList.map((cubeInfo) => {
  const [, currentCubeCount] = cubeInfo.split(' ')
  return Number(currentCubeCount)
})

function nearestSquare(x) {
  let i = 1
  while (2 ** i <= x) ++i
  return i - 1
}

let size = Math.min(nearestSquare(length1), nearestSquare(width), nearestSquare(height))

let res = 0
let used = 0
