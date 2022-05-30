function solution(price, money, count) {
  let sum = 0;
  let temp = 0;
  for (let i = 0; i < count; i++) {
    temp += price;
    sum += temp;
  }
  return money < sum ? sum - money : 0;
}

// 1 = price * 1
// 2 = price * 2
// 3 = price * 3
// 4 = price * count...
// sum = 1 + 2 + 3 + 4...
// money < sum  => 돈이 부족한 것 --> return sum - money
// money > sum  => 돈이 남는 것 --> return 0;
