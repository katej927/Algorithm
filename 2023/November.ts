// ['23.11.19] leetcode 3. Longest Substring Without Repeating Characters

const lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0

  let subStr = new Set()
  let lengthOfLongestSubstr = subStr.size

  for (let el of s) {
    if (!subStr.has(el)) {
      subStr.add(el)
      lengthOfLongestSubstr = subStr.size
    } else {
    }
  }
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
