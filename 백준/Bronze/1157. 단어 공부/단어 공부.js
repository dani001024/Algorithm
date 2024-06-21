const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

  const arr = input.split('').map(x => x.toUpperCase());
  let frequencyMap = {};

  let mode;
  let maxFrequency = 0;

  for(let i =0; i<arr.length; i++){
    const currentValue = arr[i]
    frequencyMap[currentValue] = (frequencyMap[currentValue] || 0) + 1;

    if(frequencyMap[currentValue] > maxFrequency){
        maxFrequency = frequencyMap[currentValue];
        mode = currentValue;
    }else if(frequencyMap[currentValue] == maxFrequency){
        mode = '?';
    }
  }
  console.log(mode);