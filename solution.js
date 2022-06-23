function solution(x) {
  let sum = 0;
  const numX = 0;
  while(true){
      sum += x % 10;
      x /= 10;
      if(x < 1) break;
  }
  return numX / sum == 0 ? true : false;
}
/* 문제는 어떻게 구성?
=> 문제를 쪼개보면 각 자리수의 합을 구하는 반복 + 매개변수를 합과 나누어 판별하는 분기
*/
/* 각 자리수의 합 <- 각 자리수를 구해야 한다. 
=> 정수형이다. 문자열의 경우 split을 사용했던 것 같다. 정수형은 스플릿이 가능한가?
=> 안된다. 문자열의 경우에만 사용한다.
=> toString을 이용하여 split을 이용할 수 있다. 하지만, 문자열을 쓰는 것은 나중에 생각해보자. 
=> 정수형 배열로 만들 방법은 없을까? 문자열로 푸는 느낌의 문제는 아니다.
=> 진법을 떠올려보자 현재 10진법이다.
=> %를 사용한다면? 나머지가 맨 마지막 자리수를 의미한다.
*/
/* 각 자리수의 합
=> 어떻게 반복할 것인가? (반복문을 작성할 경우 항상 쓰기) 
=> 횟수를 정확히 구할 수 없다. => for는 불가능
=> while을 사용해보자. : while() <-- ()안에 false가 뜨면 반복문은 멈춘다. 
  => x % 10 != 0 .. 101의 경우 문제가 생긴다. => != ~~ 는 ~~의 경우에 멈추고 싶은 경우
  => x / 10 != 0 .. 9의 경우 문제가 생긴다.
  => 두 자리수부터는? 12 ... 12/10 = 2 , 1/10 = 0 두자리수도 결국 못피함
  => while(true) 후에 body에서 조건을 거는 경우는?
  => if ( 0 <= x && x < 1 ) break;
/* 반복문의 바디를 정리해보자
=> sum += 매개변수 % 10;
=> 매개변수 /= 10;
=> if ( x < 1 ) break;
*/
/* 매개변수를 합으로 나눠 비교하는 분기
=> 매개변수 / sum == 0 ? true : false;
*/