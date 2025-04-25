const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

var answer = 0;

for(var x=0; x<m-1; x++){
    for(var y=0; y<n;y++){ //x,y기준 x가 세로 y가 가로
    var max = 0;

    // sum = grid[x][y] + grid[x][y+1];
    if(y-1>0) max = grid[x][y-1];
    if(x-1>=0 && max<grid[x-1][y]) max = grid[x-1][y];
    if(x+1<m-1 && max<grid[x+1][y]) max = grid[x+1][y];
    if(x-1>0&&y+1<n-1&&max<grid[x-1][y+1]) max = grid[x-1][y+1];
    if(x+1<m-1&&y+1<n-1&&max<grid[x+1][y+1]) max = grid[x+1][y+1];
    if(y+2<n-1&&max<grid[x+1]) max = grid[x][y+2];

    answer = grid[x][y] + grid[x][y+1] + max > answer ? grid[x][y] + grid[x][y+1] + max :answer
    }
}
for(var x=0; x<m-2; x++){
    for(var y=0; y<n;y++){ //x,y기준
    var sum = grid[x][y] + grid[x+1][y] + grid[x+2][y]

    answer = sum > answer ? sum :answer
    }
}
console.log(answer)