const fs = require("fs");
let a = fs.readFileSync(0).toString();

const arr = a.split(" ").map((x)=>Number(x));

console.log(arr[0]+arr[1]);