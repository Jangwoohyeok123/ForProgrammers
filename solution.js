function solution(s) {
  let max = -10000000000000;
  let min = 10000000000000;
  const arr = s.split(' ');
  for(let i = 0; i < arr.length; i++){
      const tmp = parseInt(arr[i]);
      if(tmp > max) max = tmp;
      if(tmp < min) min = tmp;
  }
  answer += min.toString();
  answer += ' ';
  answer += max.toString();
  return answer;
}
var answer = '';


/* 파싱해가면서 
=> max 보다 크면 max에 대입
=> min 보다 작으면 min에 대입
*/