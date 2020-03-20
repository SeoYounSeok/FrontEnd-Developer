// foreach 사용하여 전체 출력

function countBiggerThanTen(numbers) {
    /* 구현해보세요 */
    let count = 0;
    numbers.forEach(n => {
      if (n > 10) {
        count++;
      }
    });
    return count;
  }
  
  const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
  console.log(count); // 5
  
  export default countBiggerThanTen;
  