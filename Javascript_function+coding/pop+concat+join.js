// pop

const numbers = [10, 20, 30, 40];
const value = numbers.pop();
const value2 = numbers.pop();
console.log(value); //40
console.log(value2); //30
console.log(numbers); // [10,20]

// concat

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);
// arr1.concat(arr2) === [...arr1,...arr2]
// 위에 형식 처럼 표현할 수 있다.

console.log(arr1);  // [1,2,3]
console.log(concated); // [1,2,3,4,5,6]


// join
//배열 안의 값들을 문자열 형태로 합쳐줍니다
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5