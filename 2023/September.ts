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
var threeSum = function (nums) {
  let allTripletsReturnZero: number[][] = []

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const isSumReturnZero = nums[i] + nums[j] + nums[k] == 0

        if (isSumReturnZero) {
          const currentTriplets = [nums[i], nums[j], nums[k]].sort()
          const isDuplicateTriplets = allTripletsReturnZero.some((e) => {
            return e.toString() === currentTriplets.toString()
          })

          if (!isDuplicateTriplets) {
            allTripletsReturnZero.push(currentTriplets)
            allTripletsReturnZero.sort()
          }
        }
      }
    }
  }

  return allTripletsReturnZero
}

const TESTS4 = [
  {
    params: [-1, 0, 1, 2, -1, -4],
    result: [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
  {
    params: [0, 1, 1],
    result: [],
  },
  {
    params: [0, 0, 0],
    result: [[0, 0, 0]],
  },
]

;(function () {
  for (let i = 0; i < TESTS4.length; i++) {
    const { params, result } = TESTS4[i]
    const res = threeSum(params)
    const isSuccess = result.sort().toString() == res.sort().toString()

    console.log(`${i}번째 case: ${isSuccess ? 'SUCCESS' : 'FAILURE'}`)
  }
})()

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

// ['23.9.17] leetcode 121. Best Time to Buy and Sell Stock
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices.length) return 0

  let minSellingPrice = prices[0],
    maxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i]

    if (minSellingPrice === currentPrice) continue
    else if (minSellingPrice > currentPrice) minSellingPrice = currentPrice
    else {
      const currnetMargin = currentPrice - minSellingPrice
      if (maxProfit < currnetMargin) maxProfit = currnetMargin
    }
  }
  return maxProfit
}

const TESTS2 = [
  {
    params: [7, 1, 5, 3, 6, 4],
    result: 5,
  },
  {
    params: [7, 6, 4, 3, 1],
    result: 0,
  },
]

for (let i = 0; i < TESTS2.length; i++) {
  const { params, result } = TESTS2[i]
  const res = maxProfit(params)
  const isSuccess = res === result

  console.log(`${i}번째 case: ${isSuccess ? 'SUCCESS' : 'FAILURE'}`)
}

// ['23.9.19] leetcode 217. Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const SORTED_NUMS = nums.sort()
  const restNums = [...SORTED_NUMS]
  let result = false

  for (const currentNum of SORTED_NUMS) {
    restNums.shift()
    const isContainDuplicate = restNums.some((restNum) => restNum === currentNum)
    if (isContainDuplicate) {
      result = true
      break
    }
  }
  return result
}

const TESTS3 = [
  {
    params: [1, 2, 3, 1],
    result: true,
  },
  {
    params: [1, 2, 3, 4],
    result: false,
  },
  {
    params: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
    result: true,
  },
]

;(function () {
  for (let i = 0; i < TESTS3.length; i++) {
    const { params, result } = TESTS3[i]
    const res = containsDuplicate(params)
    const isSuccess = res === result

    console.log(`${i}번째 case: ${isSuccess ? 'SUCCESS' : 'FAILURE'}`)
  }
})()
