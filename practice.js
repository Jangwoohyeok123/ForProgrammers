/*
function solution(n) {
  return Math.floor(fibonacci(n) % 1234567);
}

function fibonacci(n) {
  for(let i = 0; i < n; i++){}
  if (n == 1) return 1;
  if (n == 0) return 0;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
*/

function fibonacci(number) {
  let result = [0, 1];
  if (number === 0) {

  }
}
function solution(n) {
  const divider = 1234567
  const dp =  [0, 1];
  for( let i = 2; i <= n; i++){
      dp[i] = (dp[i-1] + dp[i-2]) % divider
  }
  return dp[n];
}


function dff(n) {
  if()
}