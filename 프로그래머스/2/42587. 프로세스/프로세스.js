function solution(priorities, location) {
    var answer = 0;
    var loc = location;
    
    while(priorities.length != 0){
       var out = priorities.shift();
        if(out < Math.max(...priorities)){
            priorities.push(out); //다시 큐에 넣기
            if(loc == 0) loc+=priorities.length-1; //loc의 위치 맨뒤로
            else loc--;
        }else if(loc == 0){
            answer++
            break;
                }
        else{
            loc--;
             answer++
        }
    }
    
    
    return answer;
}