function solution(citations) {
    var answer = 0;

    citations.sort((a, b) => b - a);

    for(let i = 0; i < citations.length; i++) {
        if(citations[i] > i) answer++;
        else break;
    }

    return answer;
}
// 문제를 이해하는데 한참 걸렸다. 질문하기란을 보니 다른사람들도 문제가 원하는 답에 대해 상당히 혼란스러워 했던 것 같다. 
//아무튼 이 문제에서 헷갈릴만한 요소는 [20, 19, 18, 1]이 주어졌을 때 답이 1이아니라 3이라는 것이다.