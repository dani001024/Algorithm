const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

var answer = 0;


for(var i=0; i<n; i++){
    var row_cnt = 1;
    var col_cnt =1;
    for(var j=1; j<n; j++){
       
        if(row_cnt<m&&grid[i][j] == grid[i][j-1]) row_cnt ++;
        else if(row_cnt<m&&grid[i][j] != grid[i][j-1]) row_cnt =1
        if(col_cnt<m&&grid[j][i] == grid[j-1][i]) col_cnt ++;
        else if(col_cnt<m&&grid[j][i] != grid[j-1][i]) col_cnt = 1;
    }
    if(row_cnt>=m) answer ++;
    if(col_cnt>=m) answer ++;
}
console.log(answer);