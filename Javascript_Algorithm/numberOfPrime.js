function numberOfPrime(number) {

    let result = 0;
    let primeNumber = [];

    for(let i = 2; i<=n; i++) {
        var num = 0;
        for( let j = 2; j < i; j++){
            if( i % j === 0 ){
                num ++;
        
        }
    }
    
    if(num === 0) 
    primeNumber.push(i);
    }
    result = primeNumber.length;
    return result;
}

// 소수 1을 제외한 자기 자신보다 낮은 값으로 나누어 지면 소수가 아닙니다.