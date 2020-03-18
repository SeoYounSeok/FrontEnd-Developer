function hide_numbers(s) {
    var result = "";

    var hide_num = s.length - 4;
    var result = s.substr(hide_num);
    for(var i = 0; i < hide_num; i++) {
        result = '*' + result;
    }

    return result;
}
alert(hide_numbers('01047775398'));