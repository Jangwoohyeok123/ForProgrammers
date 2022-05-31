function solution(s) {
  var answer = "";
  var length = s.length;
  if (length % 2 == 0) {
    answer = s[length / 2 - 1] + s[length / 2];
  } else {
    answer = s[length / 2 - 0.5];
  }
  return answer;
}
