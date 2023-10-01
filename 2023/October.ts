// ['23.9.24] leetcode 242. Valid Anagram
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false

  const convertCharCount = (param) => {
    let countingObj = {}
    for (let el of param) {
      countingObj[el] = countingObj[el] ? ++countingObj[el] : 1
    }
    return countingObj
  }
  const sCharCount = convertCharCount(s)
  const tCharCount = convertCharCount(t)
}

const TESTS1 = [
  {
    params: {
      s: 'anagram',
      t: 'nagaram',
    },
    result: true,
  },
  {
    params: {
      s: 'rat',
      t: 'car',
    },
    result: false,
  },
]

;(function () {
  for (let i = 0; i < TESTS1.length; i++) {
    const {
      params: { s, t },
      result,
    } = TESTS1[i]
    const res = isAnagram(s, t)
    const isSuccess = res === result

    console.log(`${i}번째 case: ${isSuccess ? 'SUCCESS' : 'FAILURE'}`)
  }
})()
