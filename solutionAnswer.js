function solution(n) {
  var result = [0 , 1];
  while ( result.length !== n + 1) {
      var fibonacci = (result[result.length - 2] + result[result.length - 1]) % 1234567
      result.push(fibonacci);
  }
   return result[n];
}
