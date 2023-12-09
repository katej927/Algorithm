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
