// 예제 1번

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}

// 같은 결과 1번

array.forEach(n => {
    squared.push(n*n);

})
// 같은 결과  2번

const squared = array.map(n => n*n);

return squared;

//  예제 2번

const items = [
    {
        id: 1,
        text: 'Hello'
    },
    {
        id: 2,
        text: 'Bye'
    }
]

const texts = items.map(item => item.text);
console.log(texts);

