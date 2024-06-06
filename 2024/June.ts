// ['24.6.1] baekjoon 1493. 박스 채우기
let fs = require('fs')
let input = fs.readFileSync('input.txt').toString().split('\n')

const [boxSize, NumberOfCubeType] = input

let [length1, width, height] = boxSize.split(' ').map(Number)
const cubeList = input.slice(2)
