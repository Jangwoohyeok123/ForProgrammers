var family = {
  address: "Seoul",
  members: {},
  addFamily: function (age, name, role) {
    this.members[role] = {
      age: age,
      name: name,
    };
  },
  getHeadcount: function () {
    // family의 수는 members 개체 안에 들어가 있다.
    return Object.keys(this.members).length;
  },
};

console.log(Object.keys(family).length);
// expected : 4

// 즉, 객체이름[key]=value
// [  ] 안에 key를 넣어 value를 추출하는 구조
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
console.log(object1["a"]);
// expected output: Array ["a", "b", "c"]
// 객체의 키를 작성할 경우에는 문자열을 따지지 않는다.
// 하지만 []을 통해 접근하려고 할 경우 문자열을 따진다.

class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }
  push(item) {
    this.arr[this.index++] = item;
  }
  pop(item) {
    if (this.index <= 0) return null;
    const result = this.arr[this.index];
    this.arr[this.index--] = null;
    return result;
  }
}

// this.index++ => 연산을 하고 난후 ++ 연산이 시작됨

function solution(priorities, location) {
  let answer = 1;

  let printer = priorities.map((value, index) => [value, index]);
  while (true) {
    let tmp = printer.shift();
    if (printer.some(value => value[0] > tmp[0])) {
      printer.push(tmp);
    } else {
      if (tmp[1] === location) {
        break;
      } else {
        answer += 1;
      }
    }
  }
  return answer;
}
//정답은 1 ~ N순위까지 존재한다.
//location을 확인하기위해 배열을 map으로 value, index의 2차배열로 변환
//가장 앞에 있는 원소를 제거 후 tmp로 반환
//some함수 : 배열안에 어떤것 하나라도 조건이 만족하지 않으면 false
//true면 우선순위가 더 높은 것이 배열안에 존재하므로 맨뒤에 삽입
//1번째 값이 location 값과 같다면 종료
//아니면 answer += 1

/* map 이해하기

*/

const asd = [
  { id: 0, name: "혜림", age: 6 },
  { id: 1, name: "현일", age: 3 },
  { id: 2, name: "현아", age: 5 },
  { id: 3, name: "우림", age: 2 },
];

const arr1 = asd.map(el => {
  el.id = el.id + 1;
  return el;
});

console.log(arr1);


const all = 'sad';
const xxx = all.split('');
console.log(xxx);