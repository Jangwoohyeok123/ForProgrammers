function solution(s) {
  console.log(parseInt(0.2));
  const arr = Array.from(s);
  if (arr.length == 4 || arr.length == 6) {
    for (let i = 0; i < arr.length; i++) {
      if (Number.isNaN(Number(arr[i]))) return false;
    }
    return true;
  } else {
    return false;
  }
}
// 첫번째 분기 : 길이가 4 or 6
// inner foreach NAN return
// ;; "1"을 문자로 인식한다. parseInt가 필요하다. 
// isNaN과 parseInt든 자료를 number 와 else로 바이너리하기 위한 목적으로 생각하자. 문자열 관련해서!
// char배열을 parseInt or parseFloat 할 경우 number와 nan으로 나눠지고 그걸 isNaN() 으르 판별하자.
// 이거 너무 느리다. 정규식을 공부하자.
