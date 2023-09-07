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
