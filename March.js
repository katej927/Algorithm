  /* ['21.3.21] 프로그래머스_주식가격 */

  public static int[] solution2(int[] prices) {
		int[] answer = new int[prices.length];

		for(int i = 0; i < prices.length; i++) {
			for(int j=i+1; j < prices.length; j++){
				answer[i] = j-i;
				if(prices[i] > prices[j])  break;
			}
		}

		return answer;
	}


/* ['21.3.22] 프로그래머스_소수 찾기 */
#include <iostream>
#include <string>
#include <vector>
#include <unordered_set>
#include <cmath>
using namespace std;

unordered_set <int> s;
string str = "";
bool check[7];

void find_all_numbers(int depth, int limit, string& numbers){
    if(depth == limit) return;
    
    for(int i = 0 ; i < limit ; i++){
        if(!check[i]){
            check[i] = true;
            str.push_back(numbers[i]);
            s.insert(stoi(str));
            find_all_numbers(depth+1, limit, numbers);
            str.pop_back();
            check[i] = false;
        }
    }
}
int solution(string numbers) {
    int size = numbers.size();
    
    find_all_numbers(0,size, numbers);
    
    int answer = 0;
    
    for(auto& it : s){
        if(it == 1 || it == 0) continue;
        
        int num = sqrt(it);
        // sqrt를 사용하지 않고, 
        // for(int i = 2 ; i*i <= it ; i++){ }을 쓰는 방법도 있다.
        bool isDivided = false;
        for(int i = 2 ; i <= num ; i++){
            if(it % i == 0) isDivided = true;
        }
        if(!isDivided) answer++;
    }
    
    return answer;
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

/* ['21.4.1] LeetCode 1684*/
const countConsistentStrings = (allowed, words, chars = new Set(allowed)) => 
  words.filter(word => [...word].every(char => chars.has(char))).length;

/*['21.4.2] LeetCode 1688*/
var numberOfMatches = function(n) {
  let collectResult = 0;
  let matches=n;
  
  while (matches!=1) {
    if (matches%2!==0) {
      collectResult+=(matches-1)/2
      matches=(matches+1)/2
    } else {
      collectResult+=matches/2
      matches=matches/2
    }
  }
  
  return collectResult

};

/* ['21.4.3] leetCode 1480 */
let runningSum = function(nums) {
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i];
        nums[i]=sum;
    }
    return nums;
};

/* ['21.4.4] leetCode 1108*/
var defangIPaddr = function(address) { return address.split('.').join('[.]'); };

/* ['21.4.5] leetCode 1732*/
var largestAltitude = function(gain) {
    let newArr= [0];
  let newgain = gain

  
  for(let i=0;i<gain.length;i++) {
    
    newArr.push(gain[i]+newArr[i])
    
    
  }
 return Math.max(...newArr)
};

/* ['21.4.5] leetCode 1266*/
var minTimeToVisitAllPoints = function(points) {
    let result=0;
    
    for (let i=0;i<points.length-1;i++) {
        let firstIdxGap = Math.abs(points[i][0]-points[i+1][0])
        let secondIdxGap = Math.abs(points[i][1]-points[i+1][1])
        
        result += Math.max(firstIdxGap, secondIdxGap)
    }
    
    return result
};

/* ['21.4.6] leetCode 832 */
var flipAndInvertImage = function(image) {
    return image.map((eachImg)=>eachImg.reverse().map((el)=> el===0?1:0))
};

/* ['21.4.6] leetCode 1295 */
var findNumbers = function(nums) {
    const newArr = nums.filter((num)=>{
      return num.toString().length%2===0
    })
  return newArr.length
};

/* ['21.4.6] leetCode 1816 */
var truncateSentence = (s, k) => s.split(' ').slice(0, k).join(' ')

