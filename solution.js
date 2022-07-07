function solution(arr1, arr2) {
  const iLength = arr1.length;
  const jLength = arr1[0].length;
  for (let i = 0; i < iLength; i++) {
    for (let j = 0; j < jLength; j++) {
      arr1[i][j] += arr2[i][j];
    }
  }
  return arr1;
}
