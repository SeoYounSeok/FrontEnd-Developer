
function printReversedTriangle(num) {

    let result = ""
    for(let i = num-1; i>0; i--){
        for(let j = 0; j<i; j++){
          result += "*"
        }
        result += "\n"
    }
    return result;
  }
  
  console.log("결과 : " +'\n'+ printReversedTriangle(5));
  
// 내가 적은 정답은 이중 포문을 사용하기 때문에 n^2 감점

// 다른 분 정답

function printReversedTriangle(num) {
    var result = ''
    while (num > 0) {
        result += Array(num + 1).join("*") + '\n'; num--
    }
    return result
}
