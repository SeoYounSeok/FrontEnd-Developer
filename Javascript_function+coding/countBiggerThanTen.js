function countBiggerThanTen(numbers) {
  /* 구현해보세요 */
  let counts = 0;
  for(let i =0; i < numbers.length; i++){
      if(numbers[i] > 10)
        counts += 1;
  }
  return counts;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5

// 만약 배열 출력.

// function countBiggerThanTen(numbers) {
//     /* 구현해보세요 */
//     let counts = [];
//     for(let i =0; i < numbers.length; i++){
//         if(numbers[i] > 10)
//           counts.push(numbers[i]);
//     }
//     return counts;
//   }
  
//   const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
//   console.log(count); // 5