function solution(N, stages) {
  let count = 0;
  const arrNum = [];
  for(let i = 1; i <= N; i++){
    arrNum.push(i);
  }

  stages = stages.sort((a,b)=> a-b);
  
  for(let i = 0; i < arrNum.length; i++){
    for(let j= 0; j < stages.length; j++){
      
    }
  }

  var answer = [];
  return answer;
}

// 1. sort 오름차순
// 2. 같은 스테이지 숫자 카운팅 
//    - 다른 값이 나올 경우 map 에 key:stage , value:실패율 푸쉬
//      - 분자 초기화, 분모 = 분모 - 분자
//    - 마지막 스테이지가 나올 경우 map 에 푸쉬 후 break;
// 3. map value 값을 기준으로 내림차순 정렬 후 key 값을 result 배열에 push
// 4. return result;