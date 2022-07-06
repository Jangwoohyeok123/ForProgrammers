/*
function solution(board, moves) {
  let answer = 0;
  const stack = [];
  moves.forEach(move => {
    for(let i = 0; i < board.length; i++){
      const item = board[i][move - 1];
      if(item === 0) continue; // item = 0 이기 때문에 
      if(item === stack[stack.length - 1]) {
        stack.pop();
        answer += 2;        
      } else {
        stack.push(item);
      }
      board[i][move - 1] = 0;
      break;
    }
  });
  return answer;
}

// move - i 

const answer = solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);

console.log(answer);
*/
/*
함수 solution은 정수 n을 매개변수로 입력받습니다.
n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
예를들어 n이 118372면 873211을 리턴하면 됩니다.
*/

function solution(n) {
  let answer;
  answer = parseInt(n.toString().split("").sort().reverse().join(""));
  return parseInt(n.toString().split("").sort().reverse().join(""));
}

console.log(solution(118372));

function solution(n) {
  // 문자풀이
  // return parseInt((n+"").split("").sort().reverse().join(""));

  // 숫자풀이
  var r = 0,
    e = 0,
    arr = [];

  do {
    e = n % 10;

    // 정렬
    if (arr.length == 0) arr.push(e);
    else
      for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] <= e) {
          arr.splice(i, 0, e);
          break;
        }
        if (i == len - 1) arr.push(e);
      }
  } while (((n = Math.floor(n / 10)), n > 0));

  return parseInt(arr.join(""));
}

const start = new Date();

function bubbleSort(arr) {
  for (let iter = 0; iter < arr.length - 1; iter++) {
    for (index = 0; index < arr.length - 1 - iter; index++) {
      if (arr[index] > arr[index + 1]) {
        [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
      }
    }
  }
  return arr;
}

console.log(
  bubbleSort([
    1, 5, 3, 7, 8, 9, 10, 1, 1, 1, 1, 2, 3, 4, 5, 6, 8, 9, 0, 3, 4, 2, 5, 6, 7,
    1, 100
  ])
);
console.log((new Date() - start) / 1000);

/*

*/
