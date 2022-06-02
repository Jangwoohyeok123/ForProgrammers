function solution(arr) {
  const answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}
// 첫번째 요소는 무조건 푸쉬
// 두번째 요소부터 앞의 요소와 다를 경우 푸쉬
