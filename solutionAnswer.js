function solution(N, stages) {
  let answer = [];

  let people = stages.length;
  stages = stages.sort((a, b) => a - b);
  for (let i = 1; i <= N + 1; i++) {
    let temp = stages.filter(n => n === i).length; // filter op챔..
    answer.push([i, temp / people]);
    people -= temp;
  }

  answer.pop(); // 아마 1일 것이고 이는 성공률이므로 제외

  answer = answer.sort((a, b) => b[1] - a[1]); // ㄷㄷ;; 2 번째 요소로 내림차순이 가능함

  return answer.map(a => a[0]); // ????
}
