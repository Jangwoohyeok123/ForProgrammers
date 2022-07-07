function solution(x, n) {
  const answer = [];
  const commonRatio = x;
  let tmp = 0;
  for(let i = 0; i < n; i++){
      tmp += commonRatio;
      answer.push(tmp);
  }
  return answer;
}
