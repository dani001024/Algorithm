//큐 - FIFO
function solution(progresses, speeds) {
    var answer = [];
    
 
    
    while(progresses.length !=0){
        var out = 0;
        var day = 1;
        for(var i=0; i<progresses.length; i++){ //하루에 하는 작업
            progresses[i] += speeds[i];
       }
        for(var i=0; i<progresses.length; i++){ //하루에 하는 작업
           if(progresses[i]>=100){
               progresses.shift();
               speeds.shift();
               i--;
               out++;
           }
            else break;
       }
        
        if(out>0) {
            answer.push(out);}
        
      day++ // 하루 지남
    }
    
    return answer;
}