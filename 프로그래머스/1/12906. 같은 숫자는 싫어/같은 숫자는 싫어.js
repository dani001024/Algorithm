function solution(arr)
{
    var stack = [arr[0]]; 
    
    for(var i=1; i<arr.length; i++){
        var last = stack.pop();
        if(last != arr[i]) {
            stack.push(last)
            stack.push(arr[i]);
        }else{
            stack.push(last)
        }
    }
    
    
    return stack;
}