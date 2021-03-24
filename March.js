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
