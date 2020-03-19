    // 단순 배열 의 합을 구하라.

    function somOf(number) {
        let sum;
        for(let i =0; i<number.length; i++)
        sum += number[i]
        

        return sum;
    }

    somOf([1,2,3,4,5]);