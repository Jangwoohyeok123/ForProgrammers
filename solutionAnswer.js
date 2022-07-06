function solution(n) {
  const a = n.toString(3).split("").reverse().join("");
  return parseInt(a, 3);
}

/*
=> 진법문제의 경우 구현 x
=> 문자열로 (배열x) 숫자.toString(진법)을 이용하자
=> parseInt(문자열, 진법)
*/
