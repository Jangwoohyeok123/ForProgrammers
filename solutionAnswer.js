function isPrime(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}

function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i++) {
    if(isPrime(i)) answer++; // 만약 소수만 찾아내라면 push(i);
  }
  return answer;
}

// 소수 문제는 홍진호다 (for+if)가 2개... 시작이 2개... 함수가 2개
// 제곱근까지 반복문 돌리고 뒤집어서 나머지 검사
// 2 , <= 제곱근
// 제곱근 % i === 0 false;
//                  true; => count++

