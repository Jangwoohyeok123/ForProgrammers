function solution(bridge_length, weight, truck_weights) {
  let sec = 1;
  let curWeight = 0;
  const queBridge = Array.from({ length: bridge_length }, () => 0);

  const init = truck_weights.shift();
  queBridge.push(init);
  queBridge.shift();
  curWeight += init;

  while (curWeight !== 0) {
    const firstCar = truck_weights.shift();
    curWeight -= queBridge.shift();
    if (curWeight + firstCar <= weight) {
      curWeight += firstCar;
      queBridge.push(firstCar);
    } else {
      queBridge.push(0);
      truck_weights.unshift(firstCar);
    }
    sec++;
  }
  return sec;
}

/*
1 7
2 7
3 4
4 4,5
5 5
6 6
7 6
8 

0 ~ 1 = 1
*/

/*
다리의 구조 : 일정 크기를 유지해야 하며 1초마다 무조건 shift가 되어야 하고, 1초마다 차가 들어오지 않아도 qush를 해줘야 한다. ? 크기를 유지시켜야함
*/

/* 
  1초마다 넣을 것인가? => 다리 밖 줄세우기
  => if weight 이하일 경우 && bridge_length보다 작을 경우 넣는다. => 넣을 경우 curWeight += el; 
  => else 넣지 않는다.
  => [0]에 위치할 경우 shift를 한다. => 이 경우 curWeight -= el;
*/
/* outer loop 
1. 다리의 무게가 0인 경우에 멈춘다.
*/
