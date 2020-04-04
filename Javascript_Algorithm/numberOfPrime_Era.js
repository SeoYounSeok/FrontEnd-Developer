// 소수를 찾는 문제
// 에라토스테네스의 체
// 배수를 다 제거하는 것.

function solution(n) {
    const arr = [];
    
    for (let i = 0; i <= n; i++) {
        arr.push(true);
    }
  
    console.log(arr);
  
    for (let i = 2; i * i <= n; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
    
    // 0과 1은 소수가 아니므로 fasle;
    arr.splice(0, 2, false, false);
  
    // 배열에서 true인 값만 걸러내고, true인 값의 개수를 출력한다.
    const result = arr.filter((value) => {
        return value !== false;
    })
    
    return result.length;
  }
   
  console.log(solution(10));


  // 기본기 약수 

// function solution(number) {
//     var num = [];
  
//     for(let i=1; i<=number; i++){
//       if(number % i === 0 )
//         num.push(i);
//     }
//     return num;
//   }
  
//   console.log(solution(20));