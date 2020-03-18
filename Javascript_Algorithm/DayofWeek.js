function solution(a, b) {
    
    var week = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    var year = '2016';
    var month = a;
    var day = b;
    var dayOfWeek = week[new Date(year+'-'+month+'-'+day).getDay()];
    return dayOfWeek;
}


// const birthday = new Date(2020-3-18);
// const day1 = birthday.getDay();
// Sunday - Saturday : 0 - 6
