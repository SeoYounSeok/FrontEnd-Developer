function solution(participant, completion) {
    participant.sort(); //참가자 배열 정렬
    completion.sort(); //완주자 배열 정렬
    for(var i=0;i<participant.length;i++){
        if(participant[i] !== completion[i]){
            //인덱스 0부터 순차적으로 두 배열 비교
            return participant[i];
            //비완주자가 참가자 배열에 나올 경우 출력
        }
    }
}

// + 응용 Level2 최대 최소


function solution(values) {
  values.sort(function(a,b) {
      return  a-b;
  });
  return "최소 값은 = " + values[0] + "최대 값은 = " + values[values.length-1];
}

