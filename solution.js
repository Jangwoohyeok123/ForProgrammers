function solution(strings, n) {
  const answer = strings.sort((a, b) => {
    if (a[n] > b[n]) return 1; // a가 b 앞으로
    if (a[n] < b[n]) return -1; //b가 a 앞으로
    else {
      if (a > b) return 1;
      else return -1;
    }
  });
  return answer;
}
// 사전순으로 정렬된다. 
// => sort가 기본적으로 utf-16으로 분석하는 것이므로 따로해줄일 없다.
