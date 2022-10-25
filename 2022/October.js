// ['22.3.18] BAEKJOON 2606(바이러스) - Proceeding
const info = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2],
  4: [7],
  5: [1, 2, 6],
  6: [5],
  7: [4],
}

function solution() {
  let infection = []
  let waiting = [1]

  while (waiting.length) {
    const target = waiting.pop()
    const filter = info[target].filter((el) => !waiting.includes(el) && !infection.includes(el))
    if (filter) waiting = [...filter, ...waiting]
    infection.push(target)
  }
  return infection.length - 1
}
