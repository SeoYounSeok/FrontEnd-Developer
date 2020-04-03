// 다른 분 코드인데 Query 이해를 위해서 참고용입니다.

function solution(baseball) {
    var answer = 0;

    // 서로 다른 3개의 수 조합. 
    for(let i=123; i<=987; i++) {
        let [x, y, z] = (i+"").split('');

        // 각 수의 범위는 1~9 
        if(x === "0" || y === "0" || z === "0") continue;
        if(x === y || x === z || y === z) continue;

        for(let j=0; j<baseball.length; j++) {
            let strike = 0;
            let ball = 0;

            const [query, query_s, query_b] = baseball[j];
            const [query_x, query_y, query_z] = (query + "").split('');
            if(query_x === "0" || query_y === "0" || query_z === "0") break;
            if(query_x === query_y || query_x === query_y || query_y === query_z) break;

            if(x === query_x) strike++;
            if(y === query_y) strike++;
            if(z === query_z) strike++;
            if(query_s != strike) break;

            if((x === query_y) || (x === query_z)) ball++;
            if((y === query_x) || (y === query_z)) ball++;
            if((z === query_x) || (z === query_y)) ball++;
            if(query_b != ball) break;

            if(j === baseball.length - 1) answer++;
        }
    }


    return answer;
}
