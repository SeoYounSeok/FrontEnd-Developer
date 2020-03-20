// 진짜 유용한 함수 
// 배열에 대하여 총합을 구해야 하는 상황이 왔다고 가정해봅시다. 

// const numbers = [1, 2, 3, 4, 5];

// let sum = 0;
// numbers.forEach(n => {
//   sum += n;
// });
// console.log(sum);

const numbers = [1, 2, 3, 4, 5];

let sum = array.reduce((accumulator, current) => accumulator + current, 0);

// reduce 함수에는 두개의 파라미터를 전달합니다. 
// 첫번째 파라미터는 accumulator 와 current 를 파라미터로 가져와서 결과를 반환하는 콜백함수이구요. 
// 두번째 파라미터는 reduce 함수에서 사용 할 초깃값입니다.
