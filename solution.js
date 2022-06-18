function solution(n) {
  let answer = 0;
  let isPrime;
  for (let i = 2; i <= n; i++) {
    isPrime = true;
    for(let j = 2; j < i; j++){
      if(i % j === 0){
        isPrime = false;
        break;
      } 
    }
    if(isPrime) answer++;
  }
  return answer;
}

// 2 ~ n-1 중 나눠지면 소수 x
// 3 
 