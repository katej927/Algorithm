// ['24.5.2] baekjoon 9009. 피보나치

const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n')

const targetCount = input.map(Number)[0]
const targets = input.map(Number).slice(1)

let fibonaccis = [1, 0]
let loop = true

while (loop) {
  const lastFibonacci = fibonaccis[0] + fibonaccis[1]

  if (lastFibonacci > 100) {
    loop = false
  } else {
    fibonaccis.unshift(lastFibonacci)
  }
}

let leftNumber = 100
let startIdx = 0
let result = []
let flag = true

while (flag) {}
