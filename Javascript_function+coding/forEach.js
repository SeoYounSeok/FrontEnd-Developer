const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

// 같은결과 1번

function print(hero){
    console.log(hero);
}

superheroes.forEach(print);

// 같은결과 2번

superheroes.forEach(function(hero){
    console.log(hero);
})

// 같은결과 3번

superheroes.forEach(hero => {
    console.log(hero);
})