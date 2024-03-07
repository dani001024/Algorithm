function solution(numbers) {
  numbers = numbers.map(n => n + '').sort((a, b) => {
    return (b + a) - (a + b)
 }).join("");
  if(numbers[0]==='0')return '0';
  return numbers;
}