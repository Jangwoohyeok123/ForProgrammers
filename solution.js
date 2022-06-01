function solution(n, arr1, arr2) {
  const el = n - 1;
  let count = 0;
  let temp = "";
  const tempArr = [];
  const answer = {};
  for (let i = 0; i < n; i++) {
    tempArr.push(arr1[i] | arr2[i]);
  }
  for (let i = 0; i < n; i++) {
    for (let j = el; j >= 0; j--) {
      if (tempArr[i] >= 2 ** j) {
        tempArr[i] -= 2 ** j;
        temp += "#";
      } else {
        temp += " ";
      }
    }
    answer.push(temp);
    temp = "";
  }
  return answer
}

// 1. 한 변의 길이 구하기 == n
// 2. or 연산자 사용
// 3. 결과 배열 저장

// 3. 결과값을 이진수로 표현 => 1은 #으로 표현
// for 2 ** n - 1 -> 2 ** 0
// if 변수값 > element 2거듭제곱 값 => -= 변수값
