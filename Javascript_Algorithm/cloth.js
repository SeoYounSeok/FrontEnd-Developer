function solution(clothes) {
    var answer = 1;
    var obj={};
    for(var i=0; i<clothes.length; i++){
        if(!obj[clothes[i][1]])
            obj[clothes[i][1]] = {};
        obj[clothes[i][1]].push(clothes[i][0]);
    }
    
    // 빠지는 경우의 수 0~ +1 곱하기 계산
    for(var item in obj){
        answer *= obj[item].length + 1;
    }
    
    return answer-1;
}