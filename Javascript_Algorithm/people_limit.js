
function solution(people, limit) {

    people.sort(function(a, b){return a-b});
    // 제일 작은 값 

    for(var i=0, j=people.length-1; i < j; j--) {
        if( people[i] + people[j] <= limit ) i++;
    }    
    return people.length-i;
}

// While 문 사용

function solution2(people, limit){

    people.sort((a,b) => {return b-a;});
    let count = 0;
    while (people.length){
        if(people[0]+ people[people.length-1])
    }
    
}