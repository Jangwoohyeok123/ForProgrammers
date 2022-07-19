const solution = (brown, yellow) => {
  let answer = [];
  const total = brown + yellow;

  for (let y = 3; y <= total; y++) {
      const x = total / y;
      if (Number.isInteger(x) && x >= y && (x - 2) * (y - 2) === yellow) {
          answer.push(x);
          answer.push(y);
          break;
      }
  }

  return answer;
};

/* sudo 
구해야 할 변수는 2개이다. 
변수의 정의
노란색의 가로 : x
노란색의 세로 : y
노란색의 개수 : x * y => 이는 전체 사각형의 (가로 - 2) * (세로 - 2)
와 같다.
변수가 두 개 이지만, loop를 2개 돌필요가 없다.
일반적으로 구해야 할 변수들의 관계가 일반화가 가능하다면, (const x = total / y)
하나의 루프를 통해 해결 가능할 수 있다는 것을 생각하면 좋다. 
*/
