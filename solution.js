function solution(numbers) {
  var answer = [];
  let nums = numbers.split("");
  // 소수 판별
  const isPrimeNum = num => {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  // 순열 만들기
  const getPermutation = (arr, fixed) => {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        const newNum = fixed + arr[i];
        const copyArr = [...arr];
        copyArr.splice(i, 1);
        if (!answer.includes(+newNum) && isPrimeNum(+newNum)) {
          answer.push(+newNum);
        }
        console.log(+newNum);
        console.log(newNum);
        getPermutation(copyArr, newNum);
      }
    }
  };
  getPermutation(nums, "");
  return answer.length;
}

// 하나는 내림차순
// 하나는 오름차순
// sort 는 원배열이 정렬
// compareFunction이 제공되지 않으면 요소를 문자열로 변환하고 유니 코드 코드 포인트 순서로 문자열을 비교하여 정렬됩니다. 예를 들어 "바나나"는 "체리"앞에옵니다. 숫자 정렬에서는 9가 80보다 앞에 오지만 숫자는 문자열로 변환되기 때문에 "80"은 유니 코드 순서에서 "9"앞에옵니다.
// 함수값이 -면 a 가 앞으로
// 함수값이 +면 b 가 앞으로
