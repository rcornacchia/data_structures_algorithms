function factorial(num) {
  if (num === 1) return num;
  return num * factorial(num-1);
}

const result = factorial(4);

console.log(result);