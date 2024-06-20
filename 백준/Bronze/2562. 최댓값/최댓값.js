const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n").map((x)=>parseInt(x));
var max = 0;
  for(var i =0; i<9; i++){
    
    if(input[max]<input[i])max = i;
  }
  console.log(`${input[max]}\n${max+1}`)