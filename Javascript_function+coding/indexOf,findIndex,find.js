const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

const index = superheroes.indexOf('토르');
console.log(index); // 2

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];


const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true
    },{
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }


]

const index = todo.indexOf(3);
console.log(index); //-1

// 객체의 경우에는 indexOf 의 사용불가

const index = todos.findIndex(todo => todo.id === 3);
console.log(index); // 2

// 그럼 find는?

const index = todos.find(todo => todo.id ===3);
console.log(index);

// 전체를 다 알려준다. 