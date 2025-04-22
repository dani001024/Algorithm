function solution(maps) {
  var n = maps[0].length;
  var m = maps.length;

  function bfs(maps) {
    const queue = [[0, 0, 1]];
    const dx = [-1, 1, 0, 0]; // 상, 하, 좌, 우
    const dy = [0, 0, -1, 1];

    while (queue.length) {
      const [x, y, dist] = queue.shift();
      if (x === m - 1 && y === n - 1) return dist;

      for (var i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx >= 0 && ny >= 0 && nx < m && ny < n && maps[nx][ny] === 1) {
          maps[nx][ny] = 0;
          queue.push([nx, ny, dist + 1]);
        }
      }
    }
    return -1; //도착 못함
  }

  // bfs(maps);
  return bfs(maps);
}
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
