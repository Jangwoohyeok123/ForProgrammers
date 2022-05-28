function solution(a, b) {
  let temp = 0;
  let answer = "";
  const arr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 2~
  if (a !== 1 || a !== 12) {
    for (let i = 0; i < a - 1; i++) {
      temp += arr[i];
    }
    temp += b;
  } else {
    temp = b;
  }
  console.log(temp);
  switch (temp % 7) {
    case 1:
      return "FRI";
    case 2:
      return "SAT";
    case 3:
      return "SUN";
    case 4:
      return "MON";
    case 5:
      return "TUE";
    case 6:
      return "WED";
    case 0:
      return "THU";
  }
}
//금 1 1
//토 2 2
//일 3 3
//월 4 4
//화 5 5
//수 6  == %7 == 6
//목 7  == %7 == 0
//SUN,MON,TUE,WED,THU,FRI,SAT
