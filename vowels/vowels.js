function countVowels(str){
    const vowels = 'aeiou';
    let count = 0;
    for(let char of str.toLowerCase()){
        if(vowels.indexOf(char) !== -1){
            count ++
        }
    }
    return count
}

console.log("This is vowel test", countVowels("This is vowel test"));

console.log("----------Second solution------------------");

function countVowels2(str){
    let regex = /[aeiou]/gi
    return str.match(regex).length || 0;
}

console.log("This is vowel test", countVowels2("This is vowel test"));