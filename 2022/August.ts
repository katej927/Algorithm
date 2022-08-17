// ['22.8.17] leetcode 1304
var sumZero = function (n) {
  let result = []
  let total = 0

  for (let i = 1; i < n; i++) {
    result.push(i)
    total -= i
  }

  result.push(total)
  return result
}
