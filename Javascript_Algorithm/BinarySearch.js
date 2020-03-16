function binarySearch(numArray, key) {
  var middleIdx = Math.floor (numArray.length/2);
  var middleElem = numArray[middleIdx];
  // 중간 값 집어 넣기 
  if(middleElem === key) return true;
  else if(middleElem < key & numArray.length > 1 ){
    return binarySearch(numArray.splice(middleElem,numArray.length),key);
  }
  else if(middleElem > key & numArray.length > 1 ){
    return binarySearch(numArray.splice(0,middleIdx),key);
  }
  else return false;
}

