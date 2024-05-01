// ['24.5.2] baekjoon 9009. 피보나치

const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n')

const targetCount = input.map(Number)[0]
const targets = input.map(Number).slice(1)

let fibonaccis = [0, 1]
let fibonaccisTargetIdx = 2
let loop = true

while (loop) {
  const lastFibonacci = fibonaccis[fibonaccisTargetIdx - 1] + fibonaccis[fibonaccisTargetIdx - 2]
  if (lastFibonacci > 100) {
    loop = false
  } else {
    fibonaccis.push(lastFibonacci)
    fibonaccisTargetIdx++
  }
}
