// ['23.10.2] leetcode 242. Valid Anagram
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
  let restAmount = amount,
    countCoins = 0,
    loopNumOfLargestCoin = 0

  const loop = () => {
    for (let idx = 0; idx < sortedCoins.length; idx++) {
      const currentCoin = sortedCoins[idx]
      const currentRound = Math.floor(restAmount / currentCoin)
      const custumedCurrentRound = currentRound - loopNumOfLargestCoin
      const currentRemainder = restAmount - currentCoin * custumedCurrentRound
      restAmount = currentRemainder

      countCoins += custumedCurrentRound

      const isLastElement = idx === sortedCoins.length - 1

      if (isLastElement && restAmount) {
        const needLargestCoinRemoval = currentRound - ++loopNumOfLargestCoin === 0
        if (needLargestCoinRemoval) {
        }
      }
    }
  }
  loop()

  return countCoins
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
  {
    params: {
      coins: [186, 419, 83, 408],
      amount: 6249,
    },
    result: 20,
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

    console.log(`${i}번째 case: res는 ${res}, result는 ${result}, ${isSuccess ? 'SUCCESS' : 'FAILURE'}`)
  }
})()
