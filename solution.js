function solution(s) {
  const arr = s.split(" ");
  arr.foreach(e => {
    const temp = Array.from(e);
    for(let i = 0; i < temp.length ; i++){
      let tempChar = '';
      if(i % 2 === 0){
        tempChar = temp[i].toUpperCase();
      } else {
        tempChar = temp[i].toLowerCase();
      }
      answer.push(tempChar);
    }
    
  });
  const answer = "";
  console.log(arr);
  return answer;
}
