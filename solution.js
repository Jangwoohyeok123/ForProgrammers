function solution(d, budget) {
  // 예산 신청 배열, 예산 합계
  d.sort((a, b) => a - b);
  console.log(d);
  let sum = 0;
  let answer = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum > budget) {
      answer = i;
      break;
    } else {
      answer = i + 1;
    }
  }
  return answer;
}

// 많은 부서에게 줘야 한다.
// 최소를부른 부서부터 최대를 부른 부서로 순서를 잡는 방향으로 설정하는 것이 다수를 만족시킬 수 있다.
// 합계 > 예산 상황이 나오면 스톱하는 반복문이 필요하다.

// 1. 예산 신청서를 오름차순으로 정렬한다.
// 2. 합계를 구해가면 반복문을 돌고 , 반복횟수를 카운팅 한다.
