module.exports = function check(str, bracketsConfig) {
  let isPaired = true;
  const leftSymbols = [];
  const rightSymbols = [];
  const sameSymbols =[];
  const checkArray = [];
  bracketsConfig.forEach((item) => {
    if (item[0] == item[1]) sameSymbols.push(item[0]);
    else {
      leftSymbols.push(item[0]);
      rightSymbols.push(item[1]);
    }
    });

    const arrStr = str.split('');
    for (let item of sameSymbols) {
      if (arrStr.filter((strItem) => strItem == item).length % 2 == 0)       
        continue;      
      isPaired = false;
      return isPaired;
    } 

let inputTextFiltered = arrStr.filter((item) =>  leftSymbols.concat(rightSymbols).includes(item));
console.log('input ' + inputTextFiltered);
if (inputTextFiltered.length != 0) {
  for (let element of inputTextFiltered) {
    let index = leftSymbols.indexOf(element);
    if (index >= 0) 
      checkArray.push(element); 
    else if (rightSymbols.indexOf(element) == leftSymbols.indexOf(checkArray[checkArray.length - 1])) 
      checkArray.pop();
    else { isPaired = false; break;}   
  }

  if (checkArray.length !== 0) isPaired = false;
}  
  return isPaired;
};
