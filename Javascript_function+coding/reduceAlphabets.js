// 알파벳 개수 찾기

const alphabets = ['a', 'a' , 'a', 'b' , 'b' , 'c' , 'd' , 'e'];
// a : 3 , b : 2 , c : 1 , d : 1 , e : 1
const counts = alphabets.reduce((acc, current) => {
    if(acc[current]){
        // acc 안에  있는 current 를 조사 acc['a'] === acc.a
        acc[current] += 1;
    }
    else {
        acc[current] = 1;
    }
    return acc;
},{});


console.log(counts);

// Object {a: 3, b: 2, c: 1, d: 1, e: 1}
// a: 3
// b: 2
// c: 1
// d: 1
// e: 1