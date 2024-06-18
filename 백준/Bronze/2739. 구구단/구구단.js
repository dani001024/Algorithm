const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

rl.question('', (input) => {
    void answer(input);
    rl.close();
});

function answer(input) {
    input = parseInt(input);
    for(i=1;i<=9; i++){
        console.log(`${input} * ${i} = ${input*i}`)
    }
}