const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    console.log("if 안의 값 : " , { accumulator, current , index, array});
    return (accumulator + current) / array.length;
  }
  console.log("if 밖의 값 : " , { accumulator, current , index, array});
  return accumulator + current;
}, 0);

console.log(sum);


// if 밖의 값 :  
// Object {accumulator: 0, current: 1, index: 0, array: Array[5]}
// if 밖의 값 :  
// Object {accumulator: 1, current: 2, index: 1, array: Array[5]}
// if 밖의 값 :  
// Object {accumulator: 3, current: 3, index: 2, array: Array[5]}
// if 밖의 값 :  
// Object {accumulator: 6, current: 4, index: 3, array: Array[5]}
// if 안의 값 :  
// Object {accumulator: 10, current: 5, index: 4, array: Array[5]}

// 위 코드의 reduce 에서 사용한 콜백함수에서는 추가 파라미터로 index 와 array 를 받아왔습니다. 
// index 는 현재 처리하고 있는 항목이 몇번째인지 가르키고, 
// array 는 현재 처리하고 있는 배열 자신을 의미합니다.