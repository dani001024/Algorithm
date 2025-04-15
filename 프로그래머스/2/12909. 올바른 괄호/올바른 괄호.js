function solution(s){
    var answer = true;
    var count =0;
    for(var i=0; i<s.length; i++){
        if(s[i] === '('){
            count ++;
        }
        else{
            count --;
            if(count < 0)return false;
        }
    }
    

    return count == 0 ? true : false;
}
//어떡애푸는지까먹음 ㅠㅠ