function solution(sizes) {
  // 2차원 배열의 각 요소가 1차원 배열을 담아놓은 객체
  let answer = 0;
  const MAX = 1001;
  let maxTemp = 0;
  const minArray = [];
  sizes.forEach(element => {
    for (let i = 0; i < 2; ++i) {
      if (element[i] > maxTemp) maxTemp = element[i];
    }
    let minTemp = MAX;
    for (let i = 0; i < 2; ++i) {
      if (element[i] < minTemp) minTemp = element[i];
    }
    minArray.push(minTemp);
  });
  const l = maxTemp;
  maxTemp = 0;
  minArray.forEach(element => {
    if (element > maxTemp) maxTemp = element;
  });
  const m = maxTemp;
  answer = l * m;
  return answer;
}

/*

명합지갑을 만들어야 함
다양한 모양과 크기의 명함들을 수납
작으면 좋겠다는 못된 심보
크기조사 가로 세로 존재 가로 80 세로 70 최대

80 50 
1. 가로 세로 최대값을 기준으로 잡는다.
2. toal 기준으로 생각
  1. 한 변의 길이는 total max 값으로 잡는다.
  2. 한 변의 길이는 각 명함번호의 최솟값의 집합중 max 값을 기준으로 잡는다.
3. return 넓이 

1. foreaech 로 각 element 0,1 index 모두 를 돌면서 최대값을 찾는다. 
2. 위의 foreach 과정중 filter를 사용해 element 중 최솟값의 집합 배열을 만든다.
3. filter 결과 배열을 for로 돌면서 max 값을 찾는다. 
return 1의 최대값 * 3의 최댓값; 

*/
