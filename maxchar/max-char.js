function maxChar(str) {
    const chars = {};
    let maxCount = 0;
    let maxChar = ''
    for(let char of str){
        let value = chars[char];
        chars[char] = value !== undefined ? value + 1: 1;

        if(chars[char]> maxCount){
            maxCount = chars[char];
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(maxChar("abbbcc"));
console.log(maxChar("Hello There!"));

console.log("---------- second solution ----------");
function maxCharSecond(str){
    let maxCount = 0;
    let maxChar = ''
    for(let char of str){
        let len = str.match(new RegExp(char, "g")).length;
        if(len > maxCount){
            maxChar = char;
            maxCount = len;
        }
    }
    return maxChar
}
console.log(maxCharSecond("abbbcc"));
console.log(maxCharSecond("Hello There!"));