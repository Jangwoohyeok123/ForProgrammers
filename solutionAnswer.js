function solution(s, n) {
  const smallArr = [];
  const bigArr = [];
  let answer = "";
  for (let i = 0; i < 26; i++) {
    smallArr.push(String.fromCharCode(i + 97));
    bigArr.push(String.fromCharCode(i + 65));
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z]/)) {
      for (let j = 0; j < 26; j++) {
        if (s[i] == smallArr[j] && j + n < 26) {
          answer += smallArr[j + n];
          break;
        } else {
          const temp = j + n - 26;
          answer += smallArr[temp];
          break;
        }
      }
    } else if (s[i].match(/[A-Z]/)) {
      for (let j = 0; j < 26; j++) {
        if (s[i] == bigArr[j] && j + n < 26) {
          answer += bigArr[j + n];
          break;
        } else {
          const temp = j + n - 26;
          answer += bigArr[temp];
          break;
        }
      }
    } else {
      answer += " ";
    }
  }
  return answer;
}

/* 자바스크립트에서 아스키코드를 사용하는 방법  
=> String.fromCharCode(i) : CharCode(아스키코드 또는 유니코드)로 부터(from) 갖고온 String 이라는 의미 
=> 소문자 a-z : 97-122 대문자 A-Z : 65-90
*/
/* 공백 제거하는 방법 
=> trim 함수를 이용하여 앞 뒤 공백 제거 : 제한적임
=> replace 함수를 이용하여 제거 abcde
*/

// 풀이 과정 => 풀이 과정을 똑바로 안하니까 문제가 생긴다. 무조건 설계를
// 마치고 들어가야만 한다.. 답지보고 현타오기 싫으면 습관잡자 
/* 1. replace 로 공백제거하기 
=> / /g 모든 문자열의 공백을 검색해서, ""로 바꿔라  
*/
/* 0. 대문자 소문자 문자배열 만들기후 Z를 넘을 경우 앞으로 돌아가는 로직 만들기
 */

/* 2. 매개변수를 문자배열화 정규식.match 사용해 소문자와 대문자 분기 
=> 매개변수 element.charCodeAt() 하여 number화 후
=> +n 한 후 answer = fromCharCode(~~) 꼴로 추가하여 result 만들어 내기 
*/

/* 정규식 
=> 정규식을 사용할 줄 알아야 함 
=> / /gi , /\s/g
=> g : 글로벌 => 정규 표현식 뒤에 붙으며 전체 문자열을 탐색해서 모든 일치를 반환하도록 함
=> 정규식은 /패턴(regexr)/플래그 꼴로 이뤄진다. 
=> i : Ignore case => 대소문자 구별 하지 않고 검색 => 굳이 i를 붙일 이유가 없음 
*/
