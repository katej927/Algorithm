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
