/**
 * This function takes string and convert that into a map
 * @param {ball} str
 * @returns charMap =  {
 *  "b":1,
 *  "a":1,
 *  "l":2
 * } 
 */

function getCharMap(str){
    const charMap = {}
    for(let char of str){
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

/**
 * 
 * @param {"aBc1 def2"} str
 * @returns {"abc1def2"} str
 */
function sanitize(str){
    return str.replace(/[^a-z0-9]/gi, "").toLowerCase();
}

function anagrams(strA, strB){
    let firstCharMap = getCharMap(sanitize(strA));
    let secondCharMap = getCharMap(sanitize(strB));
    if(Object.keys(firstCharMap).length !== Object.keys(secondCharMap).length){
        return false;
    }

    for(let key in firstCharMap){
        if(firstCharMap[key] !== secondCharMap[key]){
            return false;
        }
    }
    return true;
}

console.log('"rail safety", "fairy tales" are anagrams', anagrams("rail safety", "fairy tales")) // true
console.log('"RAIL! SAFETY!", "fairy tales" are anagrams', anagrams("RAIL! SAFETY!", "fairy tales")) // true
console.log('"Hi there", "By there" are anagrams',anagrams("Hi there", "By there")) // false

console.log("---------Second solution-----------")

function anagramsSecond(strA, strB){
    let firstString = sanitize(strA).split('').sort().join('');
    let secondString = sanitize(strB).split('').sort().join('');
    return firstString === secondString;
}

console.log('"rail safety", "fairy tales" are anagrams', anagramsSecond("rail safety", "fairy tales")) // true
console.log('"RAIL! SAFETY!", "fairy tales" are anagrams', anagramsSecond("RAIL! SAFETY!", "fairy tales")) // true
console.log('"Hi there", "By there" are anagrams',anagramsSecond("Hi there", "By there")) // false