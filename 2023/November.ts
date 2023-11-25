// ['23.11.19] leetcode 3. Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function (s) {
  let set = new Set()
  let maxSize = 0
  let left = 0

  if (s.length === 0) return 0
  if (s.length === 1) return 1

  for (let idx in s) {
    while (set.has(s[idx])) {
      set.delete(s[left])
      left++
    }
    set.add(s[idx])
    maxSize = Math.max(maxSize, set.size)
  }

  return maxSize
}

const TESTS = [
  {
    params: 'abcabcbb',
    result: 3,
  },
  {
    params: 'bbbbb',
    result: 1,
  },
  {
    params: 'pwwkew',
    result: 3,
  },
]

;(function () {
  for (let i = 0; i < TESTS.length; i++) {
    const { params, result } = TESTS[i]

    const res = lengthOfLongestSubstring(params)
    const isSuccess = res === result

    console.log(`${i + 1}번째 case : ${isSuccess ? 'SUCCESS' : 'FAILURE'}`)
  }
})()

// ['23.11.24] leetcode 3. Longest Substring Without Repeating Characters
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const smallestNum = Math.min(...nums)
  let subSequence = [smallestNum]

  const makingSubSequence = (target, arr) => {
    const targetIdx = arr.indexOf(target)

    if (targetIdx >= arr.length - 1) {
      return subSequence.length
    }

    const slicedNums = arr.slice(targetIdx + 1)
    const newTarget = Math.min(...slicedNums)

    if (newTarget > target) {
      subSequence.push(newTarget)
      return makingSubSequence(newTarget, slicedNums)
    } else {
      const slicedNumsFilteredNewTarget = slicedNums.filter((el) => el !== newTarget)

      return makingSubSequence(newTarget, slicedNumsFilteredNewTarget)
    }
  }

  return makingSubSequence(smallestNum, nums)
}

const TESTS24 = [
  {
    params: [10, 9, 2, 5, 3, 7, 101, 18],
    result: 4,
  },
  {
    params: [0, 1, 0, 3, 2, 3],
    result: 4,
  },
  {
    params: [7, 7, 7, 7, 7, 7, 7],
    result: 1,
  },
]

;(function () {
  for (let idx = 0; idx < TESTS.length; idx++) {
    const { params, result } = TESTS24[idx]
    const res = lengthOfLIS(params)
    const isSuccess = res === result

    console.log(`${idx}번째 case: ${isSuccess ? 'SUCCESS' : 'FAILURE'}`)
  }
})()
