function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] == s[i]) stack.pop();
    else stack.push(s[i]);
  }
  return stack.length == 0 ? 1 : 0; 
}
/*
    s.split(); => split을 사용할 경우 통과 못함 s.를 그대로 사용해야 함 그리고 자바스크립트에서 문자열의 경우 s[i] 같은 접근이 가능하기에 굳이 split
    필요없음
    stack.push(s[0]);
    if(stack[lastIndex] == s[0]) stack.pop();
*/
