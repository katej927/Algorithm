// ['24.2.2] leetcode 283. Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  nums.sort(function (a, b) {
    if (a === 0) return 1
    if (b === 0) return -1
  })
  return nums
}

const TESTCASE = [
  {
    params: [0, 1, 0, 3, 12],
    result: [1, 3, 12, 0, 0],
  },
  {
    params: [0],
    result: [0],
  },
  {
    params: [2, 1],
    result: [2, 1],
  },
]

;(function () {
  for (const CASE of TESTCASE) {
    const { params, result } = CASE

    const res = moveZeroes(params)
    const isSucceed = res === result

    console.log(`${isSucceed ? 'SUCCESS' : 'FAILURE'}`)
  }
})()

// ['24.2.13] baekjoon 2752. 세수정렬
const fs13 = require('fs')
const input13 = fs13.readFileSync('input.txt', 'utf8').trim()

console.log(
  input13
    .split(' ')
    .sort((a, b) => Number(a) - Number(b))
    .join(' ')
)

// ['24.2.14] baekjoon 2750. 수 정렬하기 (by selection sort)
const fs14 = require('fs')
const input14 = fs14.readFileSync('input.txt', 'utf8').trim().split('\n')

let arr = input14.slice(1).map(Number)

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j
      }
    }

    let tmp = arr[minIdx]
    arr[minIdx] = arr[i]
    arr[i] = tmp
  }
}

selectionSort(arr)

console.log(arr.join('\n'))

// ['24.2.17] baekjoon 2751. 수 정렬하기 2
const fs17 = require('fs')
const input17 = fs17.readFileSync('/dev/stdin', 'utf8').trim().split('\n')

const arr17 = input17.slice(1).map(Number)

console.log(arr17.sort((a, b) => a - b).join('\n'))

// ['24.2.17] baekjoon 11004. K번째 수
const fs172 = require('fs')
const input172 = fs172.readFileSync('input.txt', 'utf8').trim().split('\n')

const [n, k] = input172[0].split(' ')

const sortedA = input172[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b)

console.log(sortedA[Number(k) - 1])

// ['24.2.18] baekjoon 11650. 좌표 정렬하기
const fs18 = require('fs')
const input18 = fs18.readFileSync('input.txt', 'utf8').trim().split('\n')

const splitedXY = input18.slice(1).map((xy) => xy.split(' '))
const sorted = splitedXY.sort((a, b) => {
  const [ax, ay] = a
  const [bx, by] = b

  if (ax === bx) return ay - by
  return ax - bx
})

console.log(sorted.map((xy) => xy.join(' ')).join('\n'))

// ['24.2.19] baekjoon 11651. 좌표 정렬하기 2
const fs19 = require('fs')
const input19 = fs19.readFileSync('input.txt', 'utf8').trim().split('\n')

const positions = input19.slice(1).map((position) => position.split(' '))

const sortedXY = positions.sort((a, b) => {
  const [ax, ay] = a
  const [bx, by] = b

  if (ay === by) return ax - bx
  return ay - by
})

console.log(sortedXY.map((xy) => xy.join(' ')).join('\n'))

// ['24.2.20] baekjoon 1181. 단어 정렬
const fs20 = require('fs')
const input20: string[] = fs20.readFileSync('input.txt', 'utf8').trim().split('\n')

const uniqueWords = [...new Set(input20.slice(1))]
const sorted20 = uniqueWords.sort((a: string, b: string) => {
  if (a.length === b.length) return a.localeCompare(b)
  else return a.length - b.length
})
console.log(sorted20.join('\n'))

// ['24.2.23] baekjoon 18870. 좌표 압축
const fs23 = require('fs')
const input23 = fs23.readFileSync('input.txt', 'utf8').trim().split('\n')

const arr23: number[] = input23[1].split(' ').map(Number)
const sortedUniqueArr = [...new Set(arr23)].sort((a, b) => a - b)

let maps = sortedUniqueArr.reduce((acc, cur, idx) => {
  acc.set(cur, idx)
  return acc
}, new Map())

console.log(
  arr23.reduce((acc, cur) => {
    acc += `${maps.get(cur)} `
    return acc
  }, '')
)

// ['24.2.27] baekjoon 10814. 나이순 정렬
const fs27 = require('fs')
const input27 = fs27.readFileSync('input.txt', 'utf8').trim()

const infos = input27.slice(1)
const splitedInfos = infos.reduce((acc, cur, idx) => {
  const [age, name] = cur.split(' ')

  acc.push([Number(age), name])
  return acc
}, [])

console.log(
  splitedInfos
    .sort((a, b) => a[0] - b[0])
    .reduce((acc, cur) => {
      const [age, name] = cur

      acc += `${age} ${name}` + '\n'
      return acc
    }, '')
)

// ['24.2.28] baekjoon 1427. 소트인사이드
const fs28 = require('fs')
const input28 = fs28.readFileSync('input.txt', 'utf8').trim()

const count = Array(10).fill(0)

for (let eachNumber of input28) {
  count[eachNumber]++
}

let answer = ''
for (let i = 9; i >= 0; i--) {
  for (let j = 0; j < count[i]; j++) {
    answer += i
  }
}

console.log(answer)
