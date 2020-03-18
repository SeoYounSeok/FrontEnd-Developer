function gcdlcm(n,m) {
    var answer = [];
    var minNum = Math.min(n,m);
    var maxNum = Math.max(n,m);
    answer[0] = gcd(minNum, maxNum);
    // 최대 공약수
    answer[1] = lcm(minNum, maxNum);
    // 최소 공배수 
    return solution;
}
// 유클리드 호제법을 사용해서 나타냅니다. 큰값 % 작은 값 = 몫 ... 나머지
// 최대공약수
function gcd(minNum,maxNum){
    if( minNum % maxNum === 0 )
        return maxNum;
    else 
        return gcd(maxNum, minNum % maxNum);
}

// 최소공배수
function lcm(minNum,maxNum){
    return minNum * maxNum / gcd(minNum, maxNum);
}