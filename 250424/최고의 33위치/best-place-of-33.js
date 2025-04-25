const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));
var max = 0;
//완전탐색
// console.log(grid);
//시작점 위치를바꾸기
for(let x=0; x<=n-3; x++){
    for(let y = 0; y<=n-3; y++){
    var cnt=0;
    for(let i = 0; i<3; i++){
        for(let j =0; j<3; j++){
        //기준x,y라 둘때
        // console.log(grid[x+i][y+j])
        if(grid[x+i][y+j] == 1) cnt++;
            }
        }

max = max<cnt ? cnt : max;
    }
}

console.log(max)