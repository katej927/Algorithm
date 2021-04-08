  /* ['21.3.21] 프로그래머스_주식가격 */
  function solution(prices) {
    let answer = new Array(prices.length).fill(0);
    let stack = [];
    let length = prices.length;
    for(let i = 0; i < length; i++) {
        while(stack.length && prices[i] < prices[stack[stack.length - 1]]) {
            let temp = stack.pop();
            answer[temp] = i - temp;
        }
        stack.push(i)
    }
    while(stack.length) {
        let temp = stack.pop();
        answer[temp] = length - temp - 1;
    }
    return answer;
}


/* ['21.3.22] 프로그래머스_소수 찾기 */
function solution(n) {
    const 소수들 = [2];
    for (let i = 2; i <= n; i++) {
      const is소수 = 소수들.some((c) => i % c === 0);
      if (!is소수) 소수들.push(i);
    }
    return 소수들.length;
  }

/* ['21.3.24] Programmers level 1_ Deduplication*/
function solution(arr) {
  return arr.filter((v, i) => v !== arr[i + 1]);
}

/* ['21.3.25] Code Kata_week2_day4 */
function topK(nums, k) {
    let obj = {};
    let arr = [];
    
    nums.forEach(el => {
        if (obj[el]) {
            obj[el]++;
        } else {
            obj[el] = 1;
        }
    });
    
    for (let properyName in obj) {
        arr.push([properyName, obj[properyName]]);
    }
    
    return arr.sort((a, b) => (b[1] - a[1])).slice(0,k).map(el => Number(el[0]));
}

topK([1,2,2,2,3,4,4,4,4] , 2);

/*['21.3.26] Code Kata_Week2_day5*/
function getMaxArea(height) {
    let size = 0;
    
    for (let i = 0; i < height.length; i++) {
        for (let j = i+1; j < height.length; j++) {
            size = Math.max(Math.min(height[i], height[j]) * (j-i), size);
        }
    }
    
    return size;
}

/* ['21.3.27] Code Kata_Week3_day1*/
const complexNumberMultiply = (a, b) => {
  let firstArr = a.substring(0, a.length-1).split('+');
  const a1 = Number(firstArr[0])
  const a2 = Number(firstArr[1])

  let secondArr = b.substring(0, b.length-1).split('+');
  const b1 = Number(secondArr[0])
  const b2 = Number(secondArr[1])

  return `${a1 * b1 - a2 * b2}+${a1 * b2 + a2 * b1}i`
}

/* ['21.3.30] LeetCode_1365 */
var smallerNumbersThanCurrent = function(nums) {
   
    const result = nums.map(num => {
         let count = 0
         for(let i=0; i < nums.length; i++) {
            if (num > nums[i]) {
                count++;
            }
        }
        return count
    })
    
    return result;
}

/* ['21.3.30] LeetCode_1603 */
var ParkingSystem = function(big, medium, small) {
    this.parking = [null, big, medium, small];
};

ParkingSystem.prototype.addCar = function(carType) {
    if(this.parking[carType] > 0) {
		this.parking[carType]--;
		return true;
	}
	return false;

};
