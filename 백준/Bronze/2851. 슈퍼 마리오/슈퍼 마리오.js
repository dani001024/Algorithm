const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = 0;
let closestSum = 0;

for (let i = 0; i < input.length; i++) {
  sum += input[i];

  // 100에 더 가까운 합을 찾는다.
  if (Math.abs(100 - sum) <= Math.abs(100 - closestSum)) {
    closestSum = sum;
  }
}

console.log(closestSum);
