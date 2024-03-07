function solution(a, b) {
return parseInt(a.toString()+b.toString()) >= 2*a*b ?parseInt(a.toString()+b.toString()) : 2*a*b;
}