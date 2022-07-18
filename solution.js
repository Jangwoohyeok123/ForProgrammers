function solution(number, k) {
  let answer = [];
  const arr = number.split("");
  arr.sort((a, b) => a - b);
  console.log(arr);
  
  return answer;
}
function binarySearch(target, dataArray) {
  let low = 0;
  let high = dataArray.length - 1;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let guess = dataArray[mid];
    if (guess === target) {
      return guess;
    } else if (guess > target) {
      high = mid - 1;
      
    } else {
      low = mid + 1;
    }
  }
  return "배열안에 targetNumber가 없다.";
}
/*
=> 정렬이 되지 않은 상황에서 이진탐색은 쓸 수 없다.
=> 문제는 정렬이 효율적이지 않아 보인다. 있는 그대로의 문자열을 쓰길 원함
*/
