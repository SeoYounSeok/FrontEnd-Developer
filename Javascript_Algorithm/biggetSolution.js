// var numbers = [6,10,2];
// function solution(numbers){
//   let answer = numbers+'';
//   // 숫자에서 문자로 바꿔 주는 것이고... 
//   let answerTest = answer.split(',');
  
//   // 이렇게 되면 문자열 split 이 가능하고..?
//   let answerTest2 = answerTest.map(v=>{
    
//     return v.substr(0,1);
//   }).sort().reverse().join('');
//   return answerTest2;
// }

// console.log(solution(numbers));

var numbers = [6,10,2];
function solution(numbers){
 let answer = numbers.map(c=> c+'').sort((a,b)=>{
   return (a-b) + (b-a);
 }).join('');
 // 숫자를 문자의 배열

 return answer;
}

console.log(solution(numbers));