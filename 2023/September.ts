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

// ['23.9.9] leetcode 15. 3Sum
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

type numberTriplets = [number, number, number]

var threeSum = function (nums: number[]) {
  let allTripletsReturnZero: numberTriplets[] = []

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const isSumReturnZero = nums[i] + nums[j] + nums[k] == 0

        if (isSumReturnZero) {
          const currentTriplets: numberTriplets = [nums[i], nums[j], nums[k]]
          const isDuplicateTriplets = allTripletsReturnZero.some((e) => {
            return e.sort().toString() === currentTriplets.sort().toString()
          })

          if (!isDuplicateTriplets) allTripletsReturnZero.push(currentTriplets)
        }
      }
    }
  }

  return allTripletsReturnZero
}

// ['23.9.10] P: how many potion left
function solution(potionInfo, initialLives, attackInfo) {
  let time = 0,
    nextAttackIdx = 0,
    leftLives = initialLives,
    continuedSuccessCount = 0
  const FINAL_ATTACK_TIME = attackInfo[attackInfo.length - 1][0],
    HEAL_BY_SEC = potionInfo[1],
    MAX_SUCCESS_COUNT = potionInfo[0],
    BONUS_HEAL = potionInfo[2]

  while (time <= FINAL_ATTACK_TIME) {
    const nextAttackTime = attackInfo[nextAttackIdx][0],
      nextAttackDamage = attackInfo[nextAttackIdx][1]
    const isTimeToAttack = time === nextAttackTime

    if (isTimeToAttack) {
      leftLives -= nextAttackDamage
      ++nextAttackIdx
      continuedSuccessCount = 0

      if (leftLives <= 0) {
        return -1
      }
    } else {
      const isSumOveredInitialLives = (heal) => leftLives + heal > initialLives
      const isMaxSuccessCount = MAX_SUCCESS_COUNT === continuedSuccessCount
      if (isMaxSuccessCount) {
        leftLives = isSumOveredInitialLives(HEAL_BY_SEC + BONUS_HEAL)
          ? initialLives
          : leftLives + HEAL_BY_SEC + BONUS_HEAL

        continuedSuccessCount = 0
      } else {
        leftLives = isSumOveredInitialLives(HEAL_BY_SEC) ? initialLives : leftLives + HEAL_BY_SEC

        continuedSuccessCount++
      }
    }
    time++
  }
  return leftLives
}
