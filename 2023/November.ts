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
