// ['22.2.2] Programmers H-Index
function solution(citations) {
  for (let h = Math.max(...citations); h >= 0; h--) {
    if (citations.filter((citation) => citation >= h).length >= h) return h;
  }
  return 0;
}
solution([3, 1, 1, 1, 4]);

// Refactor 1
function solution(citations) {
  let h = 0;
  while (h + 1 <= citations.sort((a, b) => b - a)[h]) h++;
  return h;
}

// Refactor 2
const solution = (citations) =>
  citations.sort((a, b) => b - a).filter((el, idx) => el >= idx + 1).length;

// ['22.2.4] leetcode 557
var reverseWords = (s) => {
  return s
    .split(" ")
    .map((el) => el.split("").reverse().join(""))
    .join(" ");
};

// ['22.2.9] Programmers 다리를 지나는 트럭 (Refactored)
function solution(bridge_length, weight, truck_weights) {
  let time = 1,
    idx = 1,
    passing = [{ doneTime: time + bridge_length, weight: truck_weights[0] }];

  while (passing.length) {
    // 다음 시간
    time++;

    // 현재 경과 시간 === 지나는 트럭의 나갈 시간 -> done으로 처리
    passing = passing.filter((truck) => truck.doneTime !== time);

    // 지나는 중인 트럭의 무게 총합
    let sumPassingWeight = passing.reduce(
      (acc, truck, i) => acc + truck.weight,
      0
    );

    // if (지나는 트럭들 + 다음 트럭의 무게 <= 다리 견디는 무게) 다음 트럭을 다리로 올려라
    if (sumPassingWeight + truck_weights[idx] <= weight) {
      passing.push({
        doneTime: time + bridge_length,
        weight: truck_weights[idx],
      });
      idx++;
    } else if (passing.length) {
      // [시간 단축] 다음 트럭을 못 올리는 상태(시간)로 시간만 보낼 경우, 맨 앞 트럭이 나갈 시간으로 앞당겨라 (다 지나간 경우 제외) -> 최대 35ms 단축 성공.
      time = passing[0].doneTime - 1;
    }
  }
  return time;
}
solution(2, 10, [7, 4, 5, 6]);
