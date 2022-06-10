function solution(s) {
  let result = false;
  if ((s.length == 4 || s.length == 6) && /^\d+$/.test(s)) {
    result = true;
  }
  return result;
}

/*
같은코드
function solution(s){
  let result = false;
  if((s.length == 4 || s.length == 6) && /^[0-9]+$/.test(s)) {
    result = true;
  }
  return result;
}
^ : 줄의 시작을 정의 위의 코드는 digit으로 시작한다의 의미
\d : 0123456789 범위
+ : 문자가 1개 이상 나타남을 의미
예시 : \^[a-z]+$\.test(s) , \^[0-9a-zA-Z]+$\.test(s) => 정규식에 부합하는지 확인 부합할 경우 true else false 
*/
