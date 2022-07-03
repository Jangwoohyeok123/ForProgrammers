/* 너비우선 탐색
1. 루트 노드에서 시작해서 인접한 노드를 먼저 탐색하는 방법을 말함
2. 노드란? => 분기 점, 각 항목을 의미함
*/

/*
1. 시작노드를 방문
2. 시작노드와 인접한 노드를 순차적으로 방문
    인접한 노드가 없을 경우 종료
3. a와 이웃한 노드b를 방문헀다면, 
*/

function solution(bridge_length, weight, truck_weights) {
  // '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 얘가 나갈 시간].
  let time = 0, qu = [[0, 0]], weightOnBridge = 0;

  // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
  while (qu.length > 0 || truck_weights.length > 0) {
    // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
    //    다리 위 트럭 무게 합에서 빼준다.
    if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];
    if (weightOnBridge + truck_weights[0] <= weight) {
      // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면 
      //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
      weightOnBridge += truck_weights[0];
      qu.push([truck_weights.shift(), time + bridge_length]);
    } else {
      // 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
      //    첫번째 트럭이 빠지도록 그 시간으로 점프한다.
      //    참고: if 밖에서 1 더하기 때문에 -1 해줌
      if (qu[0]) time = qu[0][1] - 1;
    }
    // 시간 업데이트 해준다.
    time++;
  }
  return time;
}

const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const bfs = (graph, startNode) => {
  const visited = []; // 탐색을 마친 노드들
  const needVisit = []; // 탐색을 해야할 노드들

  needVisit.push(startNode); // 노드 탐색시작

  // 탐색 해야할 노드의 개수가 0일 때까지
  while (needVisit.length !== 0) {
    const node = needVisit.Shift(); // 배열의 맨 앞을 꺼냄
    if (!visited.includes(node)) {
      visited.push(node);
      needVisitStack = [...needVisit, ...graph[node]];
    }
  }
};

// includes 함수는 배열안에 특정 값이 있는지 검사할 경우에 사용한다.
// return 값은 bool 이다.

/* 자바스크립트 ... 문법 => 비구조화 할당
=> 배열 혹은 개체 안의 값을 편하게 쓸 수 있는 문법이다.
=> 배열이나 객체의 값을 새로운 변수에 쉽게 할당한다.
=> 이 문법 이전에는 변수에 값을 일일히 할당해야 했다.
*/

const obj = { a: 1, b: 2, c: 30, d: 40, e: 55 };

const { a, c } = obj;
console.log(`a >>> ${a}`);

var { a: newA = 10, f: newF = 5 } = obj;
console.log(`newA >>> ${newA}`);
console.log(`newF >>> ${newF}`);
console.log(obj[a]);







