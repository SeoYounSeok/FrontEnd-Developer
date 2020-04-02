var arrayss = [1,5,2,6,3,7,4];
var commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(array, commands) {
  let answer = [];  

  commands.map(v => {
      let num1 =  array.slice(v[0]-1, v[1])
      .sort((a,b)=> {return a-b});

      console.log(num1);
      let num2= num1[v[2]-1];
      console.log(num2);
      return answer.push(num2);
  })
  return answer;
}

var ans = solution(arrayss, commands);

console.log(ans);