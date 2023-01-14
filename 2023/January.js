// ['22.1.14] Inflearn_자바스크립트 알고리즘 문제풀이 입문(코딩테스트 대비)_자릿수의 합 - proceeding
function solutiion(params) {
  const listAddedEachCipher = params.map((param) => `${param}`.split('').reduce((acc, cur) => acc + Number(cur), 0))
  const maximumNum = Math.max(...listAddedEachCipher)
  const maxIdxes = listAddedEachCipher.reduce((acc, cur, idx) => (cur === maximumNum ? [...acc, params[idx]] : acc), [])

  return Math.max(...maxIdxes)
}
