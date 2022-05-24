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
