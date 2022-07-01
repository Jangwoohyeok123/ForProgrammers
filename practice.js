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







