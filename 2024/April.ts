// ['24.4.6] baekjoon 13305. 주유소
const fs6 = require('fs')
const input6 = fs6.readFileSync('/dev/stdin', 'utf8').trim().split('\n')

const distance = input6[1].split(' ').map(Number)
const price = input6[2].split(' ').slice(0, -1).map(Number)
const sortedPrice = [...price].sort((a, b) => b - a)

let curMinPriceIdx = 0
const result6 = price.reduce((totalPrice, curPrice, idx) => {
  const curMinPrice = sortedPrice[curMinPriceIdx]
  if (curMinPrice > curPrice) {
    curMinPriceIdx = sortedPrice.findIndex((price) => price === curPrice)
    const newCurMinPrice = sortedPrice[curMinPriceIdx]
    totalPrice += distance[idx] * newCurMinPrice
  } else {
    totalPrice += distance[idx] * curMinPrice
  }
  return totalPrice
}, 0)

console.log(result6)
