const animalss = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animalss.lastIndexOf('Dodo'));
// expected output: 3
// 마지막에 나오는 Dodo 를 변환 

console.log(animalss.lastIndexOf('Tiger'));
// expected output: 1

var animals = ['dog', 'cat', 'seal', 'walrus','lion','cat'];

var delete_animals = animals.splice(animals.indexOf('cat'),1);

console.log(animals);
console.log(delete_animals);