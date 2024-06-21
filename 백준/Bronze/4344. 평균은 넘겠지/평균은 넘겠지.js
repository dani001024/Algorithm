const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

  var length = input[0][0]
  var answer = [1];

  //평균 구하기
  for(var i = 1; i<=length; i++){
    answer[i] = 0;
    var man = input[i][0];
    for(var j =1; j<=man; j++){
        answer[i] += input[i][j];
    }
    answer[i] /= man;
  } 

  //평균넘는 학생 수 구하기
  var count = [1];
 
  for(var i=1; i<=input[0][0]; i++){
    var man = input[i][0];
    count[i] = 0;
    for(var j =1; j<=man; j++){
        if(input[i][j]>answer[i])count[i]++;
    }
    answer[i] = count[i]/man*100;
  }

  
  for(var i = 1; i<=input[0][0]; i++){
    console.log(`${answer[i].toFixed(3)}%`);
  }