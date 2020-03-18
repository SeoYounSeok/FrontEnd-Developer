function hide_numbers(number) {
    var result = "";
    var hide_num = number.length - 4;
    var result = number.substr(hide_num);
    for(var i = 0; i < hide_num; i++) {
        result = '*' + result;
    }

    return result;
}

// var number="01047641408" //11
// var result= "";
// var max = number.length - 4;
// var result = number.substr(max);

// console.log(result); // 1408


// ### substr 함수  vs substring 함수

// substr함수

// var a = "123456789"
// var abc = a.substr(2,5);
// > 출력 abc : 34567 -> 0부터 시작이니까 3부터 시작하는게 맞습니다.
// - substr 함수는 substr ( 시작인덱스, 길이) 형식으로 사용하며 위 예제를 보면 쉽게 이해할 수 있다.

// substring 함수
// var a = "123456789"
// var abc = a.substring(2,5);
// > 출력 abc : 3456
// - substring 함수는 substirng(시작인덱스, 종료인덱스) 형식으로 사용되며 위 예제를 보면 쉽게 이해 할수 있습니다.

