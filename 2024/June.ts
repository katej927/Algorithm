// ['24.6.1] baekjoon 1493. 박스 채우기
const fs1 = require('fs')
const input1 = fs1.readFileSync('input.txt', 'utf8').trim().split('\n')

const [length1, width, height] = input1[0].split(' ')
const boxSize = length1 * width * height

let leftedSize = boxSize
let result = 0

const cubeSizes = input1
  .slice(2)
  .map((el) => el.split(' '))
  .reverse()

for (let [size, count] of cubeSizes) {
  count = Number(count)

  const currentCubeSize = (2 ** size) ** 3
  const dividedCount = Math.floor(leftedSize / currentCubeSize)
  const usedCurrentCubeCount = Math.min(dividedCount, count)

  result += usedCurrentCubeCount

  leftedSize = leftedSize - currentCubeSize * usedCurrentCubeCount

  if (leftedSize === 0) break
}
console.log('result', leftedSize ? -1 : result)
