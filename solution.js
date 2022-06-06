function solution(n) {
  const count = n - 1;
  for (let i = 1; i <= count; i++) {
    if (n % i == 1) return i;
  }
}

// n-1 부터 1 까지 순차적으로 나눈다.
// % 결과가 1인 경우 배열에 추가한다.
// 배열.length의 값을 answer로 return
