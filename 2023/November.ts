// ['23.11.19] leetcode 3. Longest Substring Without Repeating Characters

const lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0

  let subStr = [s[0]]
  let longestLengthOfSubStr = 0

  for (let el in s) {
    if (subStr[0] === el) {
      subStr.shift()
      subStr.push(el)
    } else if (subStr.includes(el)) {
      if (subStr.length > longestLengthOfSubStr) longestLengthOfSubStr = subStr.length

      const unDuplicatedStrOfPrevSubStr = subStr.slice(subStr.indexOf(el) + 1)
      subStr = [...unDuplicatedStrOfPrevSubStr, el]
    } else subStr.push(el)
  }
  if (subStr.length > longestLengthOfSubStr) longestLengthOfSubStr = subStr.length

  return longestLengthOfSubStr
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
