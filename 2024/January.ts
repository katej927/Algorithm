// ['23.1.3] baekjoon 2438. 별 찍기 - 1

const fs1 = require('fs')
const input = fs1.readFileSync('/dev/stdin').toString()

const inputToNum = Number(input)

let result = ''
for (let i = 1; i <= inputToNum; i++) {
  result += '*'.repeat(i) + '\n'
}

console.log(result)

// ['23.1.4] baekjoon 15552. 빠른 A+B
const fs240104 = require('fs')
const input240104 = fs240104.readFileSync('input.txt').toString().split('\n')

let result5 = ''
for (let i = 1; i <= Number(input240104[0]); i++) {
  const [firstNum, secondNum] = input240104[i].split(' ')
  result5 += Number(firstNum) + Number(secondNum) + '\n'
}

console.log(result5)
