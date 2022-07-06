function solution(n) {
  let answer = [];
  while (n > 0) {
    answer.push(n % 3);
    n /= 3;
    n = Math.floor(n);
  }
  answer = answer.toString(10);
  console.log(answer);

  return answer;
}