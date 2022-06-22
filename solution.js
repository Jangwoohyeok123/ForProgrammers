function solution(num) {
  if (num == 1) return 0;
  const answer = recursive(num);
  return answer;
}
let count = 0;
function recursive(n) {
  if (n % 2 == 0) n /= 2;
  else n = n * 3 + 1;
  count++;
  if (n == 1) return count;
  if (count == 500) return -1;
  return recursive(n);
}
