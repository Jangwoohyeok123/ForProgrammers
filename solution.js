function solution(s) {
  let answer = "";
  const arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    const temp = Array.from(arr[i]);
    for (let i = 0; i < temp.length; i++) {
      let tempChar = "";
      if (i % 2 === 0) {
        tempChar = temp[i].toUpperCase();
      } else {
        tempChar = temp[i].toLowerCase();
      }
      answer += tempChar;
    }
    if (i !== arr.length - 1) answer += " ";
  }
  return answer;
}
