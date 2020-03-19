const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
const spliced = numbers.splice(index, 1);  // [30] 
console.log(numbers); // [10,20,40]

// splice 는 저장 된다는 것만 기억! 
// splice vs slice  비교!

const numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지

console.log(sliced); // [10, 20]
console.log(numbers); // [10, 20, 30, 40]

// 개인적으로는 삭제라는 개념 보다는 복사라는 개념으로 사용하는 것이 기억하기 쉽낟. 