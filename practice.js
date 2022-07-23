class Node {
  constructor(data) {
    this.data = data; // 다른 노드와 차별점을 두는 데이터
    this.children = []; // 자식들과의 정보를 담은 배열
  }

  add(data) {
    // 자식 추가하는 메소드
    this.children.push(new Node(data));
  }
  remove(data) {
    this.children = this.children.filter(child =>
      child.data === data ? false : true
    );
  }
}

// bfs
class Tree {
  constructor() {
    this.root = null;
  }
  // 해당층의 자식노드들을 모두 방문해야 다음 노드로 지나갈 수 있다.
  bfs(f) {
    // Tree.bfs(트리)
    if (this.root === null) return;
    const unvisitedQueue = [this.root]; // 방문하지 않은 que를 만든다.
    while (unvisitedQueue.length !== 0) {
      const current = unvisitedQueue.shift();
      unvisitedQueue.push(...current.children); // 현재 부모 노드의 자식들을 모두 다 큐에 담음
      f(current); // 현재 노드를 들고 callback 함수 실행
    }
  }
}

// 빈 트리를 생성해주고 루트 노드를 빈 나무에 심는다.
const t = new Tree(); // 빈 트리를 생성해 주고
t.root = new Node("a"); // 루트가 node 'a'의 주소를 가리키면
t.root.add("b"); // a의 자식 'b', 'c'
t.root.add("c");
t.root.children[0].add("d"); // 'b'의 자식으로 'd'가 추가된다.

/*
부모는 자식노드들의 주소를 갖고 있는다.
*/

const foo = () => {
  bar()
  console.log('foo')
}
const bar = () => {
  console.log('bar')
}
foo();
console.log('foo and bar')