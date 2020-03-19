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

const index = todos.find(todo => todo.done === true );
console.log(index); // Object {id: 1, text: "자바스크립트 입문", done: true} 만 나온다. 

//--------------------------------------------------------------------------------------------------------------------------
// 이 부분부터 filter을 사용합니다. 

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
    },
    {
      id: 4,
      text: '배열 내장함수 배우기',
      done: false
    }
  ];
  
  const tasksNotDone = todos.filter(todo => todo.done === true);
  console.log(tasksNotDone);  //[Object, Object, Object]

//   const tasksNotDone = todos.filter(todo => todo.done === false);
//   const tasksNotDone = todos.filter(todo => !todo.done);
//   위에 두 개는 같은 것입니다. 

