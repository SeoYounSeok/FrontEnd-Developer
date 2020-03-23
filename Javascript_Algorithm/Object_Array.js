var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 }
];
 
// value 기준으로 정렬
items.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  // a와 b의 value가 같은 경우
  return 0;
});
 
// name 기준으로 정렬
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // 대문자 기준
  var nameB = b.name.toUpperCase(); // 대문자 기준
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
 
  // 이름이 같을 경우
  return 0;
});
