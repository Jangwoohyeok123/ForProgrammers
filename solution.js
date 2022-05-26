function solution(numbers) {
  const temp = [];
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }
  const temp2 = new Set(temp);
  temp2.forEach(e => {
    answer.push(e);
  });
  answer.sort((a, b) => a - b);
  return answer;
}
