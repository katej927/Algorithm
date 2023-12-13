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
let input = fs.readFileSync('/dev/stdin').toString().split(' ')

console.log(input.reduce((acc, cur) => acc + Number(cur), 0))

// ['23.12.13] baekjoon 10998. A×B
const fs2 = require('fs')
const input2 = fs.readFileSync('/dev/stdin').toString().split('\n')

const line = input[0].split(' ')

const a = parseInt(line[0])
const b = parseInt(line[1])

console.log(a * b)
