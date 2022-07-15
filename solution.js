function solution(s) {
  const sArr = [...s];
  const stack = [];
  for (let i = 0; i < sArr.length; i++) {
    stack.push(sArr.shift());
    if (
      stack.length >= 2 &&
      stack[stack.length - 1] == stack[stack.legnth - 2]
    ) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length == 0 ? true : false;
}
