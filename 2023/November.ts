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
  const dp = new Array(nums.length).fill(1)

  for (let curIdx = 1; curIdx < nums.length; curIdx++) {
    for (let prevIdx = 0; prevIdx < curIdx; prevIdx++) {
      if (nums[curIdx] > nums[prevIdx]) {
        dp[curIdx] = Math.max(dp[prevIdx] + 1, dp[curIdx])
      }
    }
  }

  return Math.max(...dp)
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

// ['23.11.28] leetcode 1143. Longest Common Subsequence
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const compareLength = text1.length < text2.length
  const shorterText = compareLength ? text1 : text2
  const longerText = compareLength ? text2 : text1
  const commonCount = new Array(shorterText.length).fill(0)

  for (let i = 0; i < shorterText.length; i++) {
    for (let j = 0; j < longerText.length; j++) {
      if (shorterText[i] === longerText[j]) {
        commonCount[i]++
      }
    }
  }

  return Math.max(...commonCount)
}

const TESTS1128 = [
  {
    params: {
      text1: 'abcde',
      text2: 'ace',
    },
    result: 3,
  },
  {
    params: {
      text1: 'abc',
      text2: 'abc',
    },
    result: 3,
  },
  {
    params: {
      text1: 'abc',
      text2: 'def',
    },
    result: 0,
  },
  {
    params: {
      text1: 'abcde',
      text2: 'acef',
    },
    result: 3,
  },
  {
    params: {
      text1: 'oxcpqrsvwf',
      text2: 'shmtulqrypy',
    },
    result: 2,
  },
]

;(function () {
  for (let idx in TESTS1128) {
    const {
      params: { text1, text2 },
      result,
    } = TESTS1128[idx]
    const res = longestCommonSubsequence(text1, text2)
    const isSucceed = res === result

    console.log(`${idx}번째 case: ${isSucceed ? 'SUCCESS' : 'FAILURE'}`)
  }
})()
