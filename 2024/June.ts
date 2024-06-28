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

// ['24.6.14] fast campus. 이진탐색 재귀함수 예시 (재귀 함수)
let n = 10
let target = 7
let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

const binarySearch = (start, end) => {
  if (start > end) return -1
  const mid = Math.floor((end + start) / 2)

  if (arr[mid] === target) return mid
  else if (arr[mid] > target) return binarySearch(start, mid - 1)
  else return binarySearch(mid + 1, end)
}

let result = binarySearch(0, n - 1)

console.log(result !== -1 ? `${result}번째 인덱스입니다.` : '원소가 존재하지 않습니다.')

// ['24.6.19] fast campus. 이진탐색 재귀함수 예시 (반복문)
let n2 = 10
let target2 = 7
let arr2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

const binarySearch2 = (start, end) => {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (arr2[mid] === target2) return mid
    else if (arr2[mid] > target2) return (end = mid - 1)
    else return (start = mid + 1)
  }
  return -1
}

const result2 = binarySearch2(0, n2 - 1)
console.log(result === -1 ? `없습니다.` : `${result2 + 1}번째 원소 입니다.`)

// ['24.6.20] fast campus. 하한선 함수
function lowerBound(arr, target, start, end) {
  while (start < end) {
    const mid = Math.floor((start + end) / 2)
    if (target <= arr[mid]) end = mid
    else start = mid + 1
  }
  return end
}

// ['24.6.22] fast campus. 상한선 함수
function upperBound(arr, target, start, end) {
  while (start < end) {
    const mid = Math.floor((start + end) / 2)

    if (target < arr[mid]) end = mid
    else start = mid + 1
  }
  return end
}

function countByRange(arr, leftValue, rightValue) {
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length - 1)
  let rightIndex = upperBound(arr, rightValue, 0, arr.length - 1)

  return rightIndex - leftIndex
}

// ['24.6.24] fast campus. 파라메트릭 서치
const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n')

const requests = input[1].split(' ').map(Number)
const totalSum = Number(input[2])

let tempSum = 1000000000
let max = Math.max(...requests)

while (tempSum >= totalSum) {}
