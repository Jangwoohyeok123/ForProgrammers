function solution(record) {
  let answer = [];
  const map = new Map();
  
  for (let i = 0; i < record.length; ++i) {
      const [state, uid, name] = record[i].split(' ');
      
      if (state == 'Leave') {
          answer.push([uid, '님이 나갔습니다.']);
          
          continue;
      }
      if (state == 'Enter') {
          answer.push([uid, '님이 들어왔습니다.']);
      }

      map.set(uid, name);
  }
  
  return answer.map(ele => map.get(ele[0]) + ele[1]);
}
// 출처: https://kis6473.tistory.com/167 [I.S:티스토리]
