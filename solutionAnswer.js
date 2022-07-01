function solution(numbers, target) {
  let answer = 0;
  function dfs(depth, sum) {
    if (depth === numbers.length) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }
    dfs(depth + 1, sum + numbers[depth]); // 왼쪽
    dfs(depth + 1, sum - numbers[depth]); // 오른쪽
  }
  dfs(0, 0);
  return answer;
}

/*
=> 헷갈리면 안되는 것
=> 재귀 호출시 return 안에 자기자신이 들어가지 않아도 위와 같이 작성하면 됨
=> 깊이 우선 탐색의 경우 하나하나 끝까지 다 가보는 방법으로 보통 재귀로 품
=> 왜 왼쪽 오른쪽 둘다 가고 그 의미는?
=> 그 전에 그냥 1차원 배열인데 구글에서의 그래프랑 뭔 연계가?
=> 인덱스로 생각
=> 1: 2,3,4,5  2: 1,3,4,5 1차원 배열을 그 뭐야 경우의 수 세듯이 하면 그래프
=> 구조를 떠올릴 수 있음 
*/

/* 1차원 배열의 경우의 수 찾기
=> 
*/
