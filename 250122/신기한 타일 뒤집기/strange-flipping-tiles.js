const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const tiles = new Map();
let position = 0;
for (var i = 1; i <= n; i++) {
  var [x, direction] = input[i].split(" ");
  x = Number(x);

  if (direction == "R") {
    for (var j = 0; j < x; j++) {
      tiles.set(position, 1);
      if (j + 1 != x) {
        position++;
      }
    }
  } else {
    for (var j = 0; j < x; j++) {
      tiles.set(position, 0);
      if (j + 1 != x) {
        position--;
      }
    }
  }
}
let black = 0;
let white = 0;

tiles.forEach((value) => {
  if (value == 1) black++;
  else white++;
});
console.log(white, black);