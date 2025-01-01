const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

function print1Squre(n){
    for(var i=0; i<n; i++){
         process.stdout.write("1")
    }
}

for(var i=0; i<input[0]; i++){
    print1Squre(input[1]);
    console.log("");
}