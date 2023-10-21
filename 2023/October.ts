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
    loopNumOfLargestCoin = 0,
    startIdx = 0

  const loop = () => {
    for (let idx = startIdx; idx < sortedCoins.length; idx++) {
      const currentCoin = sortedCoins[idx]
      const currentRound = Math.floor(restAmount / currentCoin)
      const custumedCurrentRound = currentRound - (idx === startIdx ? loopNumOfLargestCoin : 0)
      const currentRemainder = restAmount - currentCoin * custumedCurrentRound
      restAmount = currentRemainder

      countCoins += custumedCurrentRound

      const isLastCoin = idx === sortedCoins.length - 1

      if (isLastCoin && restAmount) {
        ++loopNumOfLargestCoin
        countCoins = 0
        restAmount = amount

        const currentRoundOfLargestCoin = Math.floor(restAmount / sortedCoins[startIdx])
        const needLargestCoinRemoval = currentRoundOfLargestCoin - loopNumOfLargestCoin === 0
        if (needLargestCoinRemoval) {
          ++startIdx

          const isLastCoinLargest = startIdx === sortedCoins.length
          if (isLastCoinLargest) return -1
        }

        loop()
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

// ['23.10.15] leetcode 724. Find Pivot Index
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftSum, rightSum

  const result: number = nums.findIndex((el, idx, arr) => {
    if (idx === 0) {
      leftSum = 0
      rightSum = rightSum = nums.reduce((acc, cur, idx) => {
        if (idx === 0) return acc
        acc += cur
        return acc
      }, 0)

      return leftSum === rightSum
    }

    leftSum += arr[idx - 1]
    rightSum -= el

    return leftSum === rightSum
  })

  return result
}

const TESTS231015 = [
  {
    nums: [1, 7, 3, 6, 5, 6],
    result: 3,
  },
  {
    nums: [1, 2, 3],
    result: -1,
  },
  {
    nums: [2, 1, -1],
    result: 0,
  },
]

;(function () {
  for (let i = 0; i < TESTS231015.length; i++) {
    const { nums, result } = TESTS231015[i]
    const res = pivotIndex(nums)
    const isSucceed = res === result

    console.log(`${i}번째 case: ${isSucceed ? 'SUCCESS' : 'FAILURE'}`)
  }
})()

// ['23.10.21] leetcode 925. Long Pressed Name
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let customedTypedIdx = 0,
    hasCharacter = false

  for (let nameIdx = 0; nameIdx < name.length; nameIdx++) {
    for (let typedIdx = customedTypedIdx; typedIdx < typed.length; typedIdx++) {
      const currnetNameCharacter = name[nameIdx]
      const currnetTypedCharacter = typed[typedIdx]
      const isSameCharacter = currnetNameCharacter === currnetTypedCharacter

      if (!isSameCharacter) {
        if (!hasCharacter) return hasCharacter

        customedTypedIdx = typedIdx
        hasCharacter = false
      } else {
        hasCharacter = true
      }
    }
  }
}

const TESTS231021 = [
  {
    params: {
      name: 'alex',
      typed: 'aaleex',
    },
    result: true,
  },
  {
    params: {
      name: 'saeed',
      typed: 'ssaaedd',
    },
    result: false,
  },
]

;(function () {
  for (let i = 0; i < TESTS231021.length; i++) {
    const {
      params: { name, typed },
      result,
    } = TESTS231021[i]

    const res = isLongPressedName(name, typed)
    const isSucceed = res === result

    console.log(`${i}번째 case: ${isSucceed ? 'SUCCESS' : 'FAILURE'}`)
  }
})()
