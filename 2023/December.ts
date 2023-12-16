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
