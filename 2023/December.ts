// ['23.12.3] leetcode 2716. Minimize String Length
/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
  return new Set(s).size
}

// ['23.12.9] baekjoon 1000. A+B
let fs = require('fs')
let input1 = fs.readFileSync('/dev/stdin').toString().split(' ')

console.log(input1.reduce((acc, cur) => acc + Number(cur), 0))

// ['23.12.13] baekjoon 10998. A×B
const fs2 = require('fs')
const input2 = fs.readFileSync('/dev/stdin').toString().split('\n')

const line = input2[0].split(' ')

const a = parseInt(line[0])
const b = parseInt(line[1])

console.log(a * b)

// ['23.12.14] baekjoon 2588. 곱셈
const fs3 = require('fs')
const input3 = fs3.readFileSync('/dev/stdin').toString().split('\n')

const firstNum = Number(input3[0])
const secondNums = input3[1]

const splitedSecondNums = secondNums.split('').reverse()

for (const secNum of splitedSecondNums) {
  console.log(firstNum * Number(secNum))
}

console.log(firstNum * Number(secondNums))

// ['23.12.14] baekjoon 2588. 시험 성적
const fs4 = require('fs')
const input4 = fs4.readFileSync('/dev/stdin').toString().split('\n')

const score = Number(input4[0])

const convertToGrade = (line) => {
  if (90 <= line && line <= 100) {
    console.log('A')
  } else if (80 <= line && line <= 89) {
    console.log('B')
  } else if (70 <= line && line <= 79) {
    console.log('C')
  } else if (60 <= line && line <= 69) {
    console.log('D')
  } else {
    console.log('F')
  }
}

convertToGrade(score)

// ['23.12.17] baekjoon 2884. 알람 시계
const fs5 = require('fs')
const input5 = fs5.readFileSync('input.txt').toString().split('\n')

const times = input5[0].split(' ')

const solution = (hours, minutes) => {
  if (minutes >= 45) {
    console.log(`${hours} ${minutes - 45}`)
  } else {
    console.log(`${hours - 1 < 0 ? 23 : hours - 1} ${60 - 45 + minutes}`)
  }
}

solution(Number(times[0]), Number(times[1]))

// ['23.12.23] baekjoon 2525. 오븐 시계
const fs6 = require('fs')
const input6 = fs6.readFileSync('input.txt').toString().split('\n')

const [originalHour, originalMin] = input6[0].split(' ').map(Number)
const addingMin = Number(input6[1])

const totalMin = (originalHour * 60 + originalMin + addingMin) % (60 * 24)
const hour = Math.floor(totalMin / 60)
const min = totalMin % 60

console.log(hour + ' ' + min)

// ['23.12.25] baekjoon 2480. 주사위 세 개
const fs7 = require('fs')
const input7 = fs7.readFileSync('input.txt').toString().split(' ')

const [first, second, third] = input7.map(Number)

if (first === second && second === third) console.log(10000 + first * 1000)
else if (first === second) console.log(1000 + first * 100)
else if (first === third) console.log(1000 + first * 100)
else if (second === third) console.log(1000 + second * 100)
else console.log(Math.max(first, second, third) * 100)

// ['23.12.28] baekjoon 8393. 합
const fs8 = require('fs')
const input8 = fs8.readFileSync('/dev/stdin').toString()

const limit = Number(input8)

console.log((limit * (1 + limit)) / 2)

// ['23.12.31] baekjoon 2739. 구구단
const fs9 = require('fs')
const input9 = fs9.readFileSync('/dev/stdin').toString()

const inputNum = Number(input9)
const mutipleNums = Array.from({ length: 9 }, (_, i) => i + 1)

mutipleNums.forEach((num) => {
  console.log(`${inputNum} * ${num} = ${inputNum * num}`)
})
