function solution(numbers) {
  const temp = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }
  const answer = [...new Set(temp)];
  return answer.sort((a, b) => a - b);
}

// ..new Set(중복을 없애고 싶은 list) 를 [] 연산자 안에 선언하며, answer 객체를 생성
// code가 짧아짐
// const answer = [...new Set(temp)]; 점이 세개다!
