// ['23.9.6] leetcode 1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let standardIdx = 0; standardIdx < nums.length; standardIdx++) {
    for (let comparedIdx = standardIdx + 1; comparedIdx < nums.length; comparedIdx++) {
      const isSumEqualToTarget = nums[standardIdx] + nums[comparedIdx] === target
      if (isSumEqualToTarget) return [standardIdx, comparedIdx]
    }
  }
}

// ['23.9.6] leetcode 14. Longest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const SHORTEST_STRING_LENGTH = Math.min(...strs.map((str) => str.length)),
    LAST_IDX = strs.length - 1
  if (!SHORTEST_STRING_LENGTH) return ''
  if (!LAST_IDX) return strs[0]

  let result = ''

  for (let letterIdx = 0; letterIdx < SHORTEST_STRING_LENGTH; letterIdx++) {
    const letterOfFirstStr = strs[0][letterIdx]

    for (let elIdx = 1; elIdx <= LAST_IDX; elIdx++) {
      if (letterOfFirstStr !== strs[elIdx][letterIdx]) return result
      else if (elIdx === LAST_IDX) result += letterOfFirstStr
    }

    if (letterIdx === SHORTEST_STRING_LENGTH - 1) return result
  }
}

// ['23.9.7] leetcode 9. Palindrome Number
var isPalindrome = function (x) {
  const REVERSED = `${x}`.split('').reverse().join('')

  return `${x}` === REVERSED
}

// ['23.9.9] leetcode 15. 3Sum
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

type numberTriplets = [number, number, number]

var threeSum = function (nums: number[]) {
  let allTripletsReturnZero: numberTriplets[] = []

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const isSumReturnZero = nums[i] + nums[j] + nums[k] == 0

        if (isSumReturnZero) {
          const currentTriplets: numberTriplets = [nums[i], nums[j], nums[k]]
          const isDuplicateTriplets = allTripletsReturnZero.some((e) => {
            return e.sort().toString() === currentTriplets.sort().toString()
          })

          if (!isDuplicateTriplets) allTripletsReturnZero.push(currentTriplets)
        }
      }
    }
  }

  return allTripletsReturnZero
}

// ['23.9.13] leetcode 66. Plus One
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const add1OnDigits = BigInt(digits.join('')) + 1n
  return Array.from(String(add1OnDigits), Number)
}

const TESTS = [
  {
    params: [1, 2, 3],
    result: [1, 2, 4],
  },
  {
    params: [4, 3, 2, 1],
    result: [4, 3, 2, 2],
  },
  {
    params: [9],
    result: [1, 0],
  },
  {
    params: [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3],
    result: [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4],
  },
]

for (let i = 0; i < TESTS.length; i++) {
  const { params, result } = TESTS[i]
  const res = plusOne(params)
  const isSuccess = JSON.stringify(res) === JSON.stringify(result)

  if (isSuccess) {
    console.log(`${i + 1}번째 case: SUCCESS`)
  } else {
    console.log(`${i + 1}번째 case: FAILURE`)
  }
}
