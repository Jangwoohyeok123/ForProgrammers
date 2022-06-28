function solution(s) {
  let innerCount;
  let temp = 0;
  const arr = s.split("");
  while (true) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] == arr[i + 1]) {
        arr.splice(i,i+2);
        break;
      }
      if(i == arr.length - 2) return 0;
      if(arr.length == 0) return 1;
    }
    if(arr.length == 0) return 1;
  }
}

/* 1. 문제 풀이 순서
=> split
=> 외부 반복 while => 내부반복의 횟수가 끝까지 간 경우 멈춤 => 배열의 길이가 0이 아닐 경우 0 return 성공 1 return 
=> 내부 반복 while => 같을 경우 까지
=> 0,1 index 비교 => 같을 경우 substr
                  => 다를 경우 지나감
0 1 2 3 4 5
length = 6
last i + 1 = 5
즉, i가 4까지 진행 뒤 break 

1. 변화가 없는 경우
2. for 문이 끝까지 돈 경우
*/
