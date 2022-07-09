function solution(citations) {
  let h = 0;
  citations = citations.sort(sorting);
  while(citations[h] >= h + 1) h++;
  return h;
}

function sorting(a, b) {
  return b - a;
}
