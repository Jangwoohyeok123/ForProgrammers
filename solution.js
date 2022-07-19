function solution(brown, yellow) {
  const answer = [];
  let total = brown + yellow;
  for (let y = 3; y <= Math.sqrt(total); y++) {
    const x = Math.floor(total / y);
    if(x >= y && (x - 2) * (y - 2) === yellow) {
      answer.push(x);
      answer.push(y);
      break;
    }
  }
  return answer;
}
/*
=> 정렬이 되지 않은 상황에서 이진탐색은 쓸 수 없다.
=> 문제는 정렬이 효율적이지 않아 보인다. 있는 그대로의 문자열을 쓰길 원함
*/
