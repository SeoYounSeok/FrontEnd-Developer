function hide_numbers(number) {

    var result = "*".repeat(s.length-4) + s.slice(-4) ;

    return result;
}

// .slice()
// - slice()는 배열의 일부분을 선택하여 새로운 배열을 만듭니다.hide_numbers

// Array.slice(start, end)

// One, Two, Three, Four, Five, Six

// slice(1,4);
// Two, Three, Four
// sliec(2);
// Three, Four, Five, Six
// slice(-4,-1)
// Three, Four, Five