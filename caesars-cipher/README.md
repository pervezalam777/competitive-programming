# Chipher text conversion

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


## Code
```javascript
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
console.log(result); //FREE CODE CAMP
```

## Run test file with node

```bash
> node caesars-cipher.js
```

## Reference
[freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher)