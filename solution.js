console.log(solution(13, 17));

function solution(left, right) {
  const arr = [];
  let temp = 0;
  let value = left;
  let count2 = 1;
  let count3 = 1;
  let count5 = 1;
  let count7 = 1;
  let count13 = 1;
  let answer = 0;

  for (let i = 0; i <= right - left; i++) {
    temp = value;
    count2 = 1;
    count3 = 1;
    count5 = 1;
    count7 = 1;
    count13 = 1;
    arr.push(value);
    while (arr[i] % 2 !== 0) {
      // 13
      if (arr[i] % 2 === 0) {
        temp /= 2;
        count2++; // 1
      }
    }
    while (arr[i] % 3 !== 0) {
      // 13
      if (arr[i] % 3 === 0) {
        temp /= 3;
        count3++; // 1
      }
    }
    while (arr[i] % 5 !== 0) {
      // 13
      if (arr[i] % 5 === 0) {
        temp /= 5;
        count5++;
      }
    }
    while (arr[i] % 7 !== 0) {
      // 13
      if (arr[i] % 7 === 0) {
        temp /= 7;
        count7++;
      }
    }
    while (arr[i] % 13 !== 0) {
      //
      if (arr[i] % 13 === 0) {
        temp /= 13;
        count13++;
      }
    }
    if ((count2 * count3 * count5 * count7 * count13) % 2 === 0) {
      answer += value;
    } else {
      answer -= value;
    }
    console.log(count2);
    value++;
  }
  return answer;
}

// 2, 3, 5, 7, 13, 17 다 곱하면 4만 6천 13 은 2640... 13까지로 소인수 분해
// 소인수로 나눠지지 않을 경우 다음 소인수로 넘어간다.
// 무한루프................
