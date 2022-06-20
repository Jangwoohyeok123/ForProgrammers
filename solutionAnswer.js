// 5번만 따라 쓰자
// 소수 판별 함수
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  const arr = numbers.split(""); // 문자열을 쪼갤 경우 split('') 을 쓰자.
  const answer = new Set();
  // 같은 숫자의 경우 한 번만 세야 함
  function getPermutation(numbersArray, fixedNumber) {
    if (numbersArray.length) {
      for (let i = 0; i < numbersArray.length; i++) {
        const temp = [...numbersArray]; // 배열이 복사
        temp.splice(i, 1);
        if (isPrime(parseInt(fixedNumber + numbersArray[i]))) {
          // 이해가 안됨 내일은 level1 풀고 순열 이해시도
          answer.add(parseInt(fixedNumber + numbersArray[i]));
        }
        getPermutation(temp, fixedNumber + numbersArray[i]);
        // 초항 : '' + [0] ... [0] + [1] ... [0] + [1] + [2] ... [0] + [1] + [2] + [3]....
      }
    }
  }
  getPermutation(arr, "");
  return answer.size;
}

// splice => (start, deleteCount, 지우고 들어갈 것들)
// start: 배열의 변경을 시작할 인덱스
// deleteCount: 배열에서 제거할 요소의 수
// item1... item2... : 배열에 추가할 요소. 요소를 지정하지 않는다면 요소 제거만 함
// 원본이 바뀜!!!!!!!!!!!!
// 만약 deleteCount가 0이라면 start index 위치에 들어감 (하나씩 뒤로 밀림)
// 떠올리면 할만하니 30분 이상 고민하고 안되면 답지 봐라
