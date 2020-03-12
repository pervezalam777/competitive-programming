function capitalize(str){
    return str
        .split(' ')
        .reduce((newArray, word) => {
            newArray.push(word[0].toUpperCase()+ word.slice(1))
            return newArray
        }, []).join(' ');
}

let sentence = "the car is blue";
console.log(sentence, capitalize(sentence))

console.log("----------second solution"); 

function capitalize(str){
    let result = '';
    for(let char of str){
        if(result === '' || result[result.length-1] === ' '){
            result += char.toUpperCase();
        } else {
            result += char;
        }
    }
    return result;
}
console.log(sentence, capitalize(sentence))

console.log("---------third solution--------");