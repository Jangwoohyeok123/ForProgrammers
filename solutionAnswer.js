function collatz(num) {
  for (var answer = 0; answer < 500; answer++) {
    if (num % 2 == 0) {
      num = num / 2;
    } else if (num == 1) {
      return answer;
    } else if (num % 2 == 1) {
      num = num * 3 + 1;
    }
  }
  return -1;
}
image.png