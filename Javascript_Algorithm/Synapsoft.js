function goQuizAnswer(s){
    let strArray = s.split(',');
    let answer_1 = 0;
    let answer_2 = 0;
    let answer_3 = 0;
    let answer_4 = 0;
  
    for(let i=0; i< strArray.length; i++){
      let quiz = strArray[i].substr(0,1);
      if(quiz ===  "김"){
        answer_1 ++;
      }
      if (quiz === "이"){
        answer_2 ++;
      }
  
      if(strArray[i] === '이재영'){
        answer_3 ++;
        console.log(answer_3);
      }
    }
  
    answer_4 = strArray.reduce((a,b) => {
      if(a.indexOf(b)<0){
        a.push(b);
      }
      return a;
    },[]);
    console.log(answer_4);
    
    return "김씨 : " + answer_1 + " 이 씨는 : " + answer_2
    + "이재명 씨는 : "+answer_3 + "중복 제거는 " + answer_4 + "내림차순으로는 "
    + answer_4.sort();
  }
  
  
  console.log(goQuizAnswer("이유덕,이재영,권종표,이재영,박민호,강상희,이재영,김지완,최승혁,이성연,박영서,박민호,전경헌,송정환,김재성,이유덕,전경헌"));