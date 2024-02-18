// ['24.2.2] leetcode 283. Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  nums.sort(function (a, b) {
    if (a === 0) return 1
    if (b === 0) return -1
  })
  return nums
}

const TESTCASE = [
  {
    params: [0, 1, 0, 3, 12],
    result: [1, 3, 12, 0, 0],
  },
  {
    params: [0],
    result: [0],
  },
  {
    params: [2, 1],
    result: [2, 1],
  },
]

;(function () {
  for (const CASE of TESTCASE) {
    const { params, result } = CASE

    const res = moveZeroes(params)
    const isSucceed = res === result

    console.log(`${isSucceed ? 'SUCCESS' : 'FAILURE'}`)
  }
})()

// ['24.2.13] baekjoon 2752. 세수정렬
const fs13 = require('fs')
const input13 = fs13.readFileSync('input.txt', 'utf8').trim()

console.log(
  input13
    .split(' ')
    .sort((a, b) => Number(a) - Number(b))
    .join(' ')
)

// ['24.2.14] baekjoon 2750. 수 정렬하기 (by selection sort)
const fs14 = require('fs')
const input14 = fs14.readFileSync('input.txt', 'utf8').trim().split('\n')

let arr = input14.slice(1).map(Number)

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j
      }
    }

    let tmp = arr[minIdx]
    arr[minIdx] = arr[i]
    arr[i] = tmp
  }
}

selectionSort(arr)

console.log(arr.join('\n'))

// ['24.2.17] baekjoon 2751. 수 정렬하기 2
const fs17 = require('fs')
const input17 = fs17.readFileSync('/dev/stdin', 'utf8').trim().split('\n')

const arr17 = input17.slice(1).map(Number)

console.log(arr17.sort((a, b) => a - b).join('\n'))

// ['24.2.17] baekjoon 11004. K번째 수
const fs172 = require('fs')
const input172 = fs172.readFileSync('input.txt', 'utf8').trim().split('\n')

const [n, k] = input172[0].split(' ')

const sortedA = input172[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b)

console.log(sortedA[Number(k) - 1])
