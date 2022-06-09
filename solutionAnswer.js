function solution(s) {
  const temp = s.split("");
  const tmp2 = temp.sort((a, b) => b.charCodeAt() - a.charCodeAt());
  const answer = tmp2.join(""); // 매개변수 : 배열의 각 요소를 구분할 문자열을 지정한다.
  return answer;
}

// 스트링을 역순으로 바꾸는 방법
// 1. 배열화시킴
// 2. sort((a,b) => b.charCodeAt() - a.charCodeAt()) 꼴로.. 
// 3. 배열을 합치기에는 join을 사용하기