function divisors(num) {
  let count = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  return count;
}

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let count = divisors(i);
    if (count % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}
// 뭔가 안풀리면 다른방법으로 바로 돌리자.. 오래걸릴거 같으면 선택 ㄴㄴ
// 약수 구하기 공식
// 방법 1. 10 의 약수의 갯수는 num % 1 == 0 를 if 로 넣어서 count 하는 방법을 선택하자.
// 방법 2. 10 의 약수의 갯수는 Math.sqrt(num) 이 정수이면
//                                           - if => 약수이 개수는 홀수
//                                           - else => 짝수
