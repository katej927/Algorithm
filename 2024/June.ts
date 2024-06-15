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

// ['24.6.14] fast campus. 이진탐색 재귀함수 예시
function binarySearch(arr, target, start, end) {
  if (start > end) return -1
  let mid = parseInt(String((start + end) / 2))
  // 찾은 경우 중간점 인덱스 반환
  if (arr[mid] == target) return mid
  // 중간점의 값보다 찾고자 하는 값이 작은 경우 왼쪽 확인
  else if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1)
  // 중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인
  else return binarySearch(arr, target, mid + 1, end)
}

let n = 10
let target = 7
let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
