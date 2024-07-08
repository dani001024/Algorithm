const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [x, y] = input[0].split(" ").map(Number);

const answer = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const value = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
var date = y;
for (let index = 0; index < x; index++) {
  date += value[index];
}
date %= 7;
console.log(answer[date]);
