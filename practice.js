function bubbleSort(data, n) {
  for (let i = 0; i < n - 1; i++) {
    // path의 횟수
    for (let j = n - 1; j > i; j--) {
      // 각 path에서 진행할 loop => i ~ n - 1
      if (data[j - 1] > data[j]) {
        const temp = data[j - 1];
        data[j - 1] = data[j];
        data[j] = temp;
      }
    }
  }
  return data;
}
const dataArr = [5, 3, 3, 7, 8, 3, 5, 7, 9, 1, 2, 3, 3];
console.log(bubbleSort(dataArr, dataArr.length));

/* loop 분석
outer loop : path의 횟수
nest loop : 배열의 길이 - 1 ; > i ; j-- 
=> 배열을 하나의 막대기라고 생각할 경우 패스가 1회 진행될 경우 막대기 길이가 1만큼 작아진다고 생각하자.
*/

/* 
버블 정렬 : 오름차순
=> 먼저 끝에 있는 두 요소부터 시작
=> index가 n개인 경우 n - 1 비교, 교환을 하고 나면 가장 작은 요소가 맨 처음으로 이동
=> 이런 일련의 과정을 패스라고 한다.
  => n 개의 index가 있는 경우, n-1 개의 패스가 존재
  => 패스를 k번 수행할 경우 앞에서 부터 요소 k가 정렬된다.
*/
