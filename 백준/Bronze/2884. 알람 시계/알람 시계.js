const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

rl.question('', (input) => {
    input = input.trim().split(' ');
    input = input.map(item => parseInt(item));
    void answer(input);
    rl.close();
});
function answer(input) {
    const a= input[0];
    const b= input[1];
    if(b>=45){
        console.log(a, b-45);
    }else if(!a==0){
        console.log(a-1,60-45+b)
    }else{
        console.log(23,60-45+b);
    }
}