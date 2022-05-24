function solution(nums) {
  // nums : N마리 포켓몬의 종류 번호가 담긴 배열
  const numsSet = new Set(nums);
  if (nums.length / 2 <= numsSet.size) {
    return nums.length / 2;
  } else {
    return numsSet.size;
  }
}
