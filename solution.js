function sqrt(n) {
  let temp = Math.sqrt(n);
  for (let i = 2; i <= temp; i++) {
    if (temp % i == 0) return false;
  }
  return true;
}

function solution(numbers) {
  let numArr = Array.from(numbers);
  
  var answer = 0;
  return answer;
}

// 조합을 한다.
// 문자열을 하나씩 쪼갠다. =>
// 숫자를 1자리부터 만들어 본다.
// 순서 상관 o => 순열조합문제같다... 머리가 순백하다
// 숫자가 기존의 결과 배열에 있다면 추가x
// sqrt 에 보내어 소수판별을 한다.
// 소수일 경우 cnt++;
// 결과 배열에 소수 추가

/*
for (let i = 0; i < numArr.length; i++) {
    numArr[i] = parseInt(numArr[i]);
  }
  
*/