function solution(n,lost,reserve){
    let answer = 0;
    let ans = [];
    // 먼저 다 있다는 가정하에 계산 1,2,3,4,5
    for(let i=1; i<=n; i++){
      ans[i] = 1;
    }
    // lost를 빼준다.  ans 순서에 빼주면 됩니다.
    for(let i=0; i<lost.length; i++){
      ans[lost[i]] = 0;
    }
    for(let i=0; i<reserve.length; i++){
      ans[reserve[i]] ++;
    }
    for(let i=1; i<=n; i++){
      if(ans[i] === 2 && ans[i-1] === 0){
        ans[i-1] = 1;
      }
      else if(ans[i] === 2 && ans[i+1] === 0){
        ans[i+1] = 1;
      }
    }  
    for(let i=1; i<=ans.length; i++){
      if(ans[i] >= 1){
        console.log(ans[i]);
        answer += 1;
      }
      
    }
    return answer;
  }