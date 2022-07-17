function solution(hp, dungeons) {
  const answer = []; // 방문했던 곳을 적음 // 중복 가능
  const visited = Array(dungeons.length).fill(false);

  function dfs(node, hp) {
    answer.push(node);
    for (let i = 0; i < dungeons.length; i++) {
      let current = dungeons[i];
      if (hp >= current[0] && !visited[i]) {
        visited[i] = true;
        dfs(node + 1, hp - current[1]);
        visited[i] = false;
      }
    }
  }
  dfs(0, hp);
  return Math.max(...answer);
}

/*
1. 던전을 앞에서 부터 돈다.
2. 방문을 안했다면
  1. 방문기록을 남긴다.
  2. 다음 함수를 호출한다.
  3. 방문기
*/



/*
Math.max(...answer);
Math.max(...answer);
*/
