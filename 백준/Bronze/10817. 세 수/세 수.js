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
    const c= input[2];
    var tmp = 0;
    for(var i=0; i<3; i++){
        for(var j=i+1; j<3;j++){
            if(input[i] > input[j]){
                tmp = input[i];
                input[i] = input[j];
                input[j] = tmp;
            }
        }
    }
    console.log(input[1]);
}