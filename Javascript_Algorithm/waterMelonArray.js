// 배열로 나타내고 싶을 때 push를 사용하여 나타내었습니다. 
function waterMelonArray(n){
  let result = [];
  for(let i=0; i<n; i++) {
      if(i%2 ===0){
      result.push('수');
      }
      else{
        result.push('박');
      }
    }
  return result;
}

console.log(waterMelonArray(3)); 

//["수", "박", "수"]