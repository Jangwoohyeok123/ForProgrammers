function solution(progresses, speeds) {
  const arr = [];
  while (progresses.length !== 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
      if (progresses[i] >= 100) progresses = 100;
    }
    if (progresses[0] === 100) {
      progresses.shift();
      let cnt = 1;
      while (progresses[cnt] === 100) {
        progresses.shift();
        cnt++;
      }
      arr.push(cnt);
    }
  }
  const answer = arr;
  return answer;
}

// progress 가 없어질때까지
// progresses + speeds
// 100이상 => 100 => 배열검사
// 0 === 100, 1 === 100?
// o => cnt++; (cnt = 1로 시작)
// x +> return cnt;
