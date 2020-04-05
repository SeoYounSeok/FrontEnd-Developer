// 이해중..

function solution(number, k) {
    const answer = [];
    let head = 0 ;
    let del = k ;

    answer.push(number[head++]);
    // answer 초기 값에 집어 넣는다.
    while(answer.length < number.length - k || head < number.length) {
        if(del && answer[answer.length-1] < number[head]) {
            answer.pop()
            del--
            continue
        }
        answer.push(number[head++])
    }

    return answer.slice(0, number.length - k).join('')
}


console.log(solution("1924",2)); //94
console.log(solution("1231234",3));
// 큰 수 만들기  -> "1924" , k = 2  = > 2 개 제외 하고 제일 큰 값을 나타내는 것입니다. 

// splice 함수 기억할 것 a.splice(0,1,"7");
// 0번 째 부터 1개 제거 "7" 0번에 넣기!
// 참고 : http://www.gisdeveloper.co.kr/?p=2113