const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

rl.question('', (input) => {
    void answer(input);
    rl.close();
});


//답안 작성부분
function answer(input) {
    if(input>=90){
        console.log('A');
    }else if(input>=80){
        console.log('B');
    }else if(input>=70){
        console.log('C');
    }else if(input>=60){
        console.log('D');
    }else{
        console.log('F');
    }
}