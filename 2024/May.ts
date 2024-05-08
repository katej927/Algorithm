// ['24.5.2] baekjoon 9009. 피보나치

const fs2 = require('fs')
const input2 = fs2.readFileSync('input.txt', 'utf8').trim().split('\n')

const targetCount = input2.map(Number)[0]
const targets = input2.map(Number).slice(1)

for (const target of targets) {
  let fibonaccis = [1, 0]
  let loop = true

  while (loop) {
    const lastFibonacci = fibonaccis[0] + fibonaccis[1]

    if (lastFibonacci > target) {
      loop = false
    } else {
      fibonaccis.unshift(lastFibonacci)
    }
  }

  let leftNumber = target
  let matchedFibonaccis: number[] = []

  while (leftNumber) {
    const matchedFibonacci = fibonaccis.find((fibonacci) => fibonacci <= leftNumber)
    matchedFibonaccis.push(matchedFibonacci!)
    leftNumber -= matchedFibonacci!
  }

  console.log(matchedFibonaccis.reverse().join(' '))
}

// ['24.5.8] baekjoon 19939. 박 터뜨리기
const fs8 = require('fs')
const input8 = fs8.readFileSync('input.txt', 'utf8').trim()

const [ballCount, teamCount] = input8.split(' ').map(Number)
let teamsBallCount = Array(teamCount).fill(0)
