const solution = (number, k) => {
  const stack = [];
  let count = 0;
  for (let i = 0; i < number.length; i++) {
      const item = number[i];
      // stack이 초기에 비어있으면 push 한다.
      console.log("초기 item 은 :" + item);
      if (stack.length === 0) {
          stack.push(item);
          console.log("if 문 안에 : " + stack + " 길이 : " + stack.length + " item : " + item);
          continue;
      }
      // stack에 쌓인 최근 값이 들어와야할 값보다 크거나 같을때까지 꺼낸다.
      while (stack[stack.length - 1] < item) {
          console.log("while 시작");
          console.log("while 문 안에 stack : " + stack + "// 길이 : " + stack.length  + "// item : " + item +"// i 값 : " + i);
          stack.pop();
          count++;
          console.log("while 문 안에 pop 진행 stack : " + stack + " // item : " + item+" // count" + count);
          // 만약 숫자를 빼야할만큼 뺐다면 완성된 값을 반환한다.
          if (count === k) return stack.join("") + number.slice(i, number.length);
          // 스택이 비어있으면 루프를 멈추고 스택에 아이템을 추가한다.
          if (stack.length === 0) break;
      }
      stack.push(item);
      console.log(" ::: stack 은 : " + stack +" i 값 : " + i);
  }
  // 만약
  return stack.join("").slice(0, number.length - k);
}
console.log(solution("4513454",5))