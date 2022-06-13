function a(x, y) {
  if (x % y === 0) return y;
  return a(y, x % y);
}

function solution(w, h) {
  for (let i = 0; i < w / a(w, h); i++) {
    
  }
  var answer = 1;
  return answer;
}

// w,h 를 최대공약수로 나누고 곱하면, 다뤄야 할 단위가 나온다.
// 지나가는 사각형의 갯수를 구한다.
// 단위의 총 갯수 = 단위 * (한 변/ 최대공약수)

// 최대공약수..
// 8 12
// 12 8
// 8 4 => 뒤에 놈 return
