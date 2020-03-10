# Numeric number to Roman number
Convert the given number into a roman numeral.

## Code 
```javascript
var romanMap = {
    1:"I",
    5:"V",
    10:"X",
    50:"L",
    100:"C",
    500:"D",
    1000:"M"
}


function digitToRoman(val, unit, mid, max) {
    let overFlow = (mid && max && val > mid) ? romanMap[max] : romanMap[mid];
    if(overFlow && val === mid) return romanMap[mid];
    let roman = (overFlow && val > mid) ?  romanMap[mid] : "";
    val = (val > mid) ? val-mid : val; 
    var count = 0;
    while(val > 0){
        roman += romanMap[unit];
        val -= unit;
        count++;
        if(overFlow && count > 3){
            roman = romanMap[unit] + overFlow;
        }
    }
    return roman;
}

function convertToRoman(num) {
    let romanNum = "";
    let mulBy = 10
    let tenPlace = 10
    while(num > tenPlace){
        let remainder = num % tenPlace;
        let rom = romanMap[remainder] || digitToRoman(remainder, tenPlace/mulBy, tenPlace/2, tenPlace);
        romanNum = rom + romanNum
        
        num = Math.floor(num / tenPlace) * tenPlace;
        tenPlace *= mulBy; 
    }
    
    let rom = romanMap[num] || digitToRoman(num, tenPlace/mulBy, tenPlace/2, tenPlace);
    romanNum = rom + romanNum;
    return romanNum;
}

let numericNumbers = [36, 100, 3456]

numericNumbers.forEach(num => {
    let romanNumber = convertToRoman(num);
    console.log(`${num} roman number is ${romanNumber}`);
})

```

## Run test file with node

```bash
> node roman-numeral-converter.js
```

## Reference
[freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter)