function solution(priorities, location) {
  let loopCount = 0;
  let shiftCount = 0;
  let check = false;
  while(priorities.length !== 0) {
      const tmp = priorities.shift();
      for(let i = 0; i < priorities.length; i++){
          if(tmp < priorities[i]) check = true;
          if(check == true) break;
      }
      if(check == true) priorities.push(tmp);
      else shiftCount++;
      
      if(loopCount == location) return shiftCount;
  }
}
/*
1. 끄낸다. 횟수1 + 1 (0부터 시작)
2. 확인한다.
  if check 뒤로 보낸다. 
  else 횟수2 +1
3. 횟수1 == location 회수 2 return 
  
  
  
반복을 대기목록의 길이가 0일 경우까지 한다
*/ 