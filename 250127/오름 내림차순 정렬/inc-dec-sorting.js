const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = input[0];
let arr = input[1].split(" ").map((x)=>Number(x));
const arr1 = arr.sort((a,b)=>a-b); //오름차순
console.log(arr1.join(" "))

const arr2 = arr.sort((a,b)=>b-a) //내림차순
console.log(arr2.join(" "))