// ['23.9.24] leetcode 242. Valid Anagram
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false

  const convertCharCount = (param) => {
    const sortedParam = param.split('').sort().join('')
    let countingObj = {}

    for (let el of sortedParam) {
      countingObj[el] = countingObj[el] ? ++countingObj[el] : 1
    }
    return JSON.stringify(countingObj)
  }

  return convertCharCount(s) === convertCharCount(t)
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

// ['23.10.5] leetcode 322. Coin Change
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (!amount) return 0
  const sortedCoins = coins.sort((a, b) => b - a)
}

const TEST_231005 = [
  {
    params: {
      coins: [1, 2, 5],
      amount: 11,
    },
    result: 3,
  },
  {
    params: {
      coins: [2],
      amount: 3,
    },
    result: -1,
  },
  {
    params: {
      coins: [1],
      amount: 0,
    },
    result: 0,
  },
]

;(function () {
  for (let i = 0; i < TEST_231005.length; i++) {
    const {
      params: { coins, amount },
      result,
    } = TEST_231005[i]
    const res = coinChange(coins, amount)
    const isSuccess = res === result

    console.log(`${i}번째 case: ${isSuccess ? 'SUCCESS' : 'FAILURE'}`)
  }
})()
