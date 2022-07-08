function solution(orders, course){
  let answer = [];
  course.forEach(num => {
    const menus = new Map();
    orders.forEach((order) => {
      const combinations = getCombination(order.split('').sort(), num);
      combinations.forEach(combs => {
        const comb = combs.join('');
        menus.set(comb, menus.has(comb) ? menus.get(comb) + 1 : 1);
      });
    });
  })
  let populate = Math.max(...menus.vvalues());
  menus.forEach((count, menu, map) => {
    if(count === populate && count >= 2) answer.push(menu);
  });
  return answer.sort();
}
const result = [];
function getCombination(arr, selectNum){
  if(selectNum == 1) return arr.map(v => [v]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combination = getCombination(rest, selectNum - 1);
    const attached = combination.map(v => [fixed, ...v]);
    result.push(...attached);
  });
  return result;
}