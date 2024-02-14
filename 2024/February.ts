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

// ['24.2.14] baekjoon 2750. 수 정렬하기
const fs14 = require('fs')
const input14 = fs14.readFileSync('input.txt', 'utf8').trim().split('\n')

console.log(
  input14
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b)
    .join('\n')
)
