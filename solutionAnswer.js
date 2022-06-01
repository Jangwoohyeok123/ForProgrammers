// 비밀 지도
function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    // 입력받은 두 array의 수를 하나씩 가져와서 이진법 변환
    // 0을 채워서 자릿수 맞추기
    const arr1Bin = arr1[i].toString(2).padStart(n, 0);
    const arr2Bin = arr2[i].toString(2).padStart(n, 0);
    // 만들어진 두 이진수(문자열)을 한글자씩 접근하여 비교하기
    // 둘 중 하나라도 1이면 #(벽), 둘다 0인경우 공백
    // 지도의 한 줄
    let map_row = "";
    for (let j = 0; j < n; j++) {
      if (arr1Bin[j] === "1" || arr2Bin[j] === "1") {
        map_row += "#";
      } else {
        map_row += " ";
      }
    }
    answer.push(map_row);
  }
  return answer;
}
