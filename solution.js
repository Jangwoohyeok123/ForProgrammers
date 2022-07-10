function solution(n) {
  return Math.floor(fibonacci(n) % 1234567);
}

function fibonacci(n) {
  for(let i = 0; i < n; i++){}
  if (n == 1) return 1;
  if (n == 0) return 0;
  return fibonacci(n - 1) + fibonacci(n - 2);
}