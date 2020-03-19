// 숫자로 이루어진 배열이 주어졌을 때, 해당 숫자 안에 들어있는 숫자 중 3보다 큰 숫자로만 이루어진 배열을 새로 만들어서 반환해보세요.

function biggerThanThree(numbers) {

    const array = [];
    for(let i=0; i<numbers.length; i++){
        if(array[i] > 3)
            array.push(numbers[i]);
    }
    
    return result;

}

const numbers = [1,2,3,4,5,6,7];
    
console.log(biggerThanThree(numbers));
    