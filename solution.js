function solution(arr, divisor) {
  let count = 0;
  const answer = [];

  arr.forEach(element => {
    if (element % divisor == 0) {
      count++;
      answer.push(element);
    }
  });
  let temp = [];
  temp.push(-1);
  if (count === 0) return temp;
  return answer.sort((a, b) => a - b);
}
// arr 돌면서 각 element를 나눈다.
// 나눠질 경우 count++, answer.push(element);
// if count == 0  return -1
// else return answer.sort((a,b) a-b);
