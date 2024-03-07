function solution(array, commands) {
  var answer = [];
  for(var i=0; i<commands.length; i++){
    var arr = commands[i];
    var sliceArr = array.slice(arr[0]-1,arr[1]).sort((a, b) => a - b);
    answer.push(sliceArr[arr[2]-1]);
  }
    return answer;
}