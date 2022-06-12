function solution(s) {
  let min = s.length;
  let tmpStr = "";
  let press = "";
  let cnt = 1;
  // i == 길이, j == 배열 인덱스
  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    press = "";
    cnt = 1;
    tmpStr = s.substr(0, i);
    for (let j = i; j < s.length; j += i) {
      if (tmpStr === s.substr(j, i)) cnt++;
      else {
        if (cnt === 1) press += tmpStr;
        else press += cnt + tmpStr;
        tmpStr = s.substr(j, i);
        cnt = 1;
      }
    }
    if(cnt === 1) press += tmpStr;
    else press += cnt + tmpStr;
    if (min > press.length) min = press.length;
  }
  return min;
}

// 1. 길이별로 자른 배열을 만드는 반복문 만들기
//      2중 포문
//    - 그 안에서 각 배열마다 0,1 1,2 2,3 3,4 4,5 5,6 6,7 7,8 8,9
//    - 압축문 만들고 push(압축문.length)
//      (압축문의 결과값을 모은 배열이 필요)
// 2. 압축문 길이 배열중 return 최솟값

/* 첫번째 -
tempStr = 자른 원소 배열.. tempStr은 [] 꼴로 만든다. 
cutArr.push(tempStr)
*/

/* 압축문 만들기
0,1 1,2 2,3 3,4 4,5
맞다면 => cnt++;
다르면 => tempStr2 = cnt + tempStr
      => cnt = 1;
두번째 for문에 지배를 받아야 함
*/

/* 압축문 만들기 이후.. 압축문 길이 배열에
=> pressArr.push(압축문.length)  
첫번째 for문에 지배를 받아야 함
*/

/*
=> 최솟값 뽑아서 카카오에 제출
*/

//.,,,후 ㅎ, 으ㅜㅍㅋ;풐ㅌ;ㅣㅏㅜㅍㅌㅋ;ㅏㅜㅍ
// 반복문을 만들 때 반복을 정의하자
// 반복 : 압축길이로 배열을 훑는다.
