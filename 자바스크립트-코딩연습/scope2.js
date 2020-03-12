let say = 'Hello';

function print() {
  console.log(say); //Hello 
  say = ' World';
  console.log(say); // World

  function inner_print() {
    console.log(say); //World
    say = 'Good';
    console.log(say); //Good
    say = ' Bye';
    console.log(say); // say
  }

  inner_print();
}

print();
