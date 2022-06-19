function solution(id_list, report, k) {
  var answer = [];
  let s = id_list.map(x => {
      return {uid: x, sid: [], cid: [], count: 0};
  })
  for(let i = 0 ; i < report.length; i++) {
      const data = report[i].split(' ');
      const uid = s.findIndex(x => x.uid === data[0]);
      const sid = s.findIndex(x => x.uid === data[1]);
      if(s[uid].sid.indexOf(data[1]) < 0) {
          s[uid].sid.push(data[1]);
          s[sid].count++;
      }
  }
  s.forEach((result) => {
      const data = result.sid.findIndex(x => {
          s.findIndex(a => {
              if(x === a.uid && a.count >= k) {
                  result.cid.push(a.uid);
              }
          })
      }); 
  });
  answer = s.map((k) => {
      return k.cid.length;
  })
  return answer;
}