//순서를 바꾸지 않고 ..
function solution(numbers, target) {
  var answer = 0;

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    dfs(index + 1, sum + numbers[index]); //더하기
    dfs(index + 1, sum - numbers[index]); //빼기
  }

  dfs(0, 0);

  return answer;
}

