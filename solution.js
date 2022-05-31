function solution(s) {
  const size = s.length;
  let answer = "";
  const half = size / 2;
  if (size % 2 === 0) {
    answer += s.charAt(half - 1);
    answer += s.charAt(half);
  } else {
    answer += s.charAt(Math.floor(half));
  }
  return answer;
}

// 1. 배열의 사이즈를 구한다.
// 2. 2로 나눠
//  - 2로 나눠지지 않을 경우 .. 내림
//  - 2로 나눠질 경우  반 , 반 - 1
// 3.
