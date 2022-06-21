function solution(n, m) {
  return [gcd(n, m), (n * m) / gcd(n, m)];
}

function gcd(n, m) {
  if (n % m == 0) return m;
  return G(m, n % m);
}

// AB = LG 때문에 최대공약수만 찾으면 됨








