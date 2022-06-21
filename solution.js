function solution(n, m) {
  return [G(n, m), (n * m) / G(n, m)];
}

function G(n, m) {
  if (n % m == 0) return m;
  return G(m, n % m);
}

// 12 7
// 7 5
// 5 2
// 2 1 => 1 (종결조건)

// LG = AB
// LG = a * G * b * G
// L = abG