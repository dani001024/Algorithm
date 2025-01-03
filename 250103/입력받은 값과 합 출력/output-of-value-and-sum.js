const fs = require("fs");
let input = fs.readFileSync(0).toString();

arr = input.split(" ").map((x)=>Number(x));

console.log(arr[0],arr[1],arr[0]+arr[1]);