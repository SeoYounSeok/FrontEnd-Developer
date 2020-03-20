
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);

console.log(sum);

// Object {accumulator: 0, current: 1}
// Object {accumulator: 1, current: 2}
// Object {accumulator: 3, current: 3}
// Object {accumulator: 6, current: 4}
// Object {accumulator: 10, current: 5}
// 15
// accumulator - 초기 값 두번제 파라미터
// current - 함수에 들어갈 값 