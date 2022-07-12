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

const arr = [1, 2, 3, 4, 5, 6];

const copy = arr.filter(e => {
  console.log(`index: ${e}`);
  return e % 2 == 0;
});

console.log(copy);

// filter는 새로운 배열이다.
// filter의 callback 함수의 return 값은 boolean 값이다.
// 원 배열을 순차적으로 돌면서 callback 로직으로 검사
// 즉, callback은 검사함수를 의미한다.
// true 의 값을 push 해 둔 배열을 return 한다.
/*
function solution(numbers){
  const answer = [];
  let nums = numbers.split("");
  //소수판별
  const isPrimeNum
}
*/
const a = [0,1];
console.log(+a[1]);
