const input = [1, 2, 3, 4];

// 조합에서 중요한 점은 1차원 배열이 있을 경우
// 1차원 배열을 순서대로 읽으며 뒤로보기를 할 필요가 없다는 점이다.
// ex 1을 보고 2를 봤다면 2에서 시작할 경우 1을 볼 필요가 없다.

function getCombination(array, selectNumber) {
  const result = [];
  if(selectNumber === 1) return array.map((el) => [el]);
  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combination = getCombination(rest, selectNumber - 1);
    const attached = combination.map((combination) => [fixed, ...combination]);
    result.push(...attached);
  })
  return result;
}

console.log(getCombination(input, 3));

// 재귀함수는 종결조건을 만나기 까지 올라가고 종결조건을 만나고 난 후 내려간다.
// 즉, 올라가는 식과 내려가는 식을 구별해놔야 한다.
// 올라가면서 input을 변형시키고
// 내려가면서 각 항에 대한 output을 만들어 낸다. 

/*
시작
  1을 선택(고정)하고 -> 나머지 [2, 3, 4] 중에서 2개씩 조합을 구한다.
  [1, 2, 3] [1, 2, 4] [1, 3, 4]
  2를 선택(고정)하고 -> 나머지 [3, 4] 중에서 2개씩 조합을 구한다.
  [2, 3, 4]
  3을 선택(고정)하고 -> 나머지 [4] 중에서 2개씩 조합을 구한다. 
  [] 
  4을 선택(고정)하고 -> 나머지 [] 중에서 2개씩 조합을 구한다.
  []
종료
*/

/* 풀이과정
재귀 종료 조건 : 하나를 선택할 경우 모든 배열의 원소를 선택해서 리턴
고정된 값의 나머지 배열에 대해서 조합을 구하도록 한다.
조합을 만들어온 결과에 fixed 고정된 값을 앞에 붙여서 리턴할 배열에 spread
syntax로 배열화 한 후에 리턴함
2c3 1c2 같이 선택하려는 개수가 많으면 빈 배열이 return되기 때문에 위의 예
에서 3과 4를 선택할 때에는 빈 배열이 돌아와서 최종 결과값에 포함되지 않음
*/

/*
1. 1을 고정 => 나머지 [2,3,4] 중에 2개를 선택
2. 2를 고정 => 나머지 [3,4] 중에 1개를 선택 => selectNumber가 1이므로 
*/

/* 남의 함수 코드를 공부하는 나만의 방법론
1. 먼저 코드를 쭉 훑고 추론을 한다. (한 번에 이해할 생각 ㄴㄴ)
2. 인풋과 아웃풋에 모든 것을 집중한다.
3. input과 output을 통해 프로그래머가 원하는 것이 무엇인지 추론하고
4. logic 을 다시 보기한다.
  => logic 을 봐도 모르겠다면 input, output을 이용해 다시 추론해 본다.
*/


