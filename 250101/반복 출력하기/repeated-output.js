const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

function print(){
    console.log("12345^&*()_")
}

for(var i=0; i<input; i++){
    print();
}