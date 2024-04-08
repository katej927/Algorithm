// ['24.4.6] baekjoon 13305. 주유소
const fs6 = require('fs')
const input6 = fs6.readFileSync('input.txt', 'utf8').trim()

const distance = input6[1].split(' ').map(Number)
const price = input6[2].split(' ').slice(0, -1).map(Number)
const sortedPrice = [...price].sort((a, b) => b - a)

let curMinPriceIdx = 0

console.log(
  price.reduce((totalPrice, curPrice, idx) => {
    const curMinPrice = sortedPrice[curMinPriceIdx]
    if (curMinPrice > curPrice) {
      curMinPriceIdx = sortedPrice.findIndex((price) => price === curPrice)
    }
  }, 0)
)
