function solution(n) {
  let i = 1;
  var answer = 1;
  let sum = 0;
  while (n / i > 2) {
    for (let j = i; j < n; j++) {
      sum += j;
      if (sum > n) break;
      if (sum == n) answer++;
    }
    i++;
    sum = 0;
  }
  return answer;
}
