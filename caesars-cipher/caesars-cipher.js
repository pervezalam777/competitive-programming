
function rot13(str) { // LBH QVQ VG!
  let len = str.length;
  let newStr  = "";
  for(let i = 0; i < len; i++){
    let charCode = str.charCodeAt(i);
    if(charCode >= 65 && charCode <= 90){
      let val = charCode % 65;
      if(val >= 13){
        newStr += String.fromCharCode(charCode-13);
      } else {
        let newCode = 26 - (13-val);
        newStr += String.fromCharCode(65+newCode);
      }
    } else {
        newStr += str[i]
    }
    
  }
  return newStr;
}

// Change the inputs below to test
let result = rot13("SERR PBQR PNZC");
console.log(result);
