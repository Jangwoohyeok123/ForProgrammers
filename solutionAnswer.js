function solution(land) {
  for(let i=1; i<land.length; i++) {
      land[i][0] += Math.max(
          land[i-1][1],
          land[i-1][2],
          land[i-1][3],
      );
      land[i][1] += Math.max(
          land[i-1][0],
          land[i-1][2],
          land[i-1][3],
      );
      land[i][2] += Math.max(
          land[i-1][0],
          land[i-1][1],
          land[i-1][3],
      );
      land[i][3] += Math.max(
          land[i-1][0],
          land[i-1][1],
          land[i-1][2],
      );
  }
  return Math.max(...land[land.length-1]);
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
