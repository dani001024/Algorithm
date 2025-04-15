function solution(s) {
    var answer = '';
    var arr = s.split(" ").map((x)=>Number(x));
    var min = arr[0];
    var max = arr[0]
    for(var i=0; i<arr.length; i++){
        if(min>arr[i])min = arr[i];
        if(max<=arr[i])max = arr[i];
    }
    answer = min + " " + max;
    console.log(answer)
    return answer;
}