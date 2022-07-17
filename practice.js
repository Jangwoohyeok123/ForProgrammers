function recursive(i) {
  if (i > 5) {
    return 99;
  }
  console.log(i);
  recursive(i + 2);
  console.log(i);
  recursive(i + 1);
}

console.log(recursive(1));
