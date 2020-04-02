function solution(answers){
  let result = [];
  let answer = [0,0,0];
  let num1 = [1,2,3,4,5];
  let num2 = [2,1,2,3,2,4,2,5];
  let num3 = [3,3,1,1,2,2,4,4,5,5];

  for(let i =0; i<answers.length; i++){
    if(num1[i % num1.length] === answers[i]){
      answer[0]++;
    }
    if(num2[i % num2.length] === answers[i]){
      answer[1]++;
    }
    if(num3[i % num3.length] === answers[i]){
      answer[2]++;
    }
  }
  let max = Math.max(...answer);
  
  for(let i=0; i<answer.length; i++){
    if(answer[i] === max){
      result.push(i+1);
    }
  }
  return result;
}