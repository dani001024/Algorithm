const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);

let max_cnt = 0;

for (var i = 1; i <= n; i++) {
  const arr = input[i].split(" ");
  for (var j = 0; j < n - 2; j++) {
    var cnt = 0;
    var index = j;
    for (var k = 0; k < 3; k++) {
      if (isExisted(arr[index])) {
        cnt++;
      }
      max_cnt = Math.max(max_cnt, cnt);
      index++;
    }
  }
}
console.log(max_cnt);

function isExisted(element) {
  if (element == "1") return true;
}
