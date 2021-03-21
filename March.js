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