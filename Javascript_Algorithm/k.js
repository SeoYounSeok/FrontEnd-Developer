var arrayss = [1,5,2,6,3,7,4];
var commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(array, commands) {
  let answer = [];  

 
  for(let i=0; i<commands.length; i++){
    let num1 = commands[i][0];
    let num2 = commands[i][1]; 
    let num3 = commands[i][2];
    let newArray = array.slice(num1-1, num2);

    console.log(num1 + "," + num2+ "," + num3);
    console.log(newArray);
    newArray.sort((a,b)=> {return a-b});
    // 내림차순
    answer[i] = newArray[num3-1];
    console.log(answer);
  }
  return answer;
}
var ans = solution(arrayss, commands);

console.log(ans);