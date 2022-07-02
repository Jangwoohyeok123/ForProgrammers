function solution(land) {
  var answer = 0;
  let maxIndex = 0;
  let max = -100000000000;
  for (let i = 0; i < land.length; i++) {
    let max = -1;
    for (let j = 0; j < land[i].length; j++) {
      if (maxIndex == j) break;
      if (max < land[i][j]) {
        max = land[i][j];
        maxIndex = j;
      }
    }
    answer += tmp;
  }
  return answer;
}

solution([
  [23, 37, 13, 2]
]);

/*
=> 다 도는 방식으로 하면 시간초과 불보듯 뻔함
=> 각 단계에서 최댓값을 찾으면서 가야한다.
=> land.length : 행의 개수
=> lang[~~].length : 열의 개수
*/

/* version1
1. 행의 수 만큼 도는 배열만들기
2. 전 행의 최댓값을 기억하는 변수만들기
3. 변수를 제외한 행의 열 중 가장 큰 값을 더하기.. 변수와 일치할 경우 continue
*/

/* version2

*/
