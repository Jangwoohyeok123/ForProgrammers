function solution(citations) {
  let answer = 0;
  for(let h = 0; h < 1000; h++){
      let cnt = 0;
      citations.forEach((el) => {
          if(el >= h) cnt++;
      });
      if(cnt >= h) answer = h;
  }
  return answer;
}