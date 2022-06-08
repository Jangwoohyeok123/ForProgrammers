function solution(s) {
  let p = 0;
  let y = 0;
  const tmp = Array.from(s);
  tmp.forEach(element => {
    if (element === "p" || element === "P") p++;
    if (element === "Y" || element === "y") y++;
  });
  if (p == y) return true;
  else return false;
}
