function solution(k, dungeons) {
  let answer = [];
  let visited = Array(dungeons.length).fill(0);

  function dfs(count, k) {
    answer.push(count);

    for (let i = 0; i < dungeons.length; i++) {
      let current = dungeons[i];
      if (k >= current[0] && !visited[i]) {
        visited[i] = 1;
        dfs(count + 1, k - current[1]);
        visited[i] = 0;
      }
    }
  }

  dfs(0, k);
  return Math.max(...answer);
}
/*
1. 최소 필요 피로도
2. 소모 피로도

하루 한 번씩 탐험할 수 있는 던전 있음

*/

/*
dfs

*/
