
function reverseSolutionOne(str){
    let reversed = '';
    let len = str.length;
    for(let i = len-1; i > -1; i--){
        reversed += str.charAt(i);
    }
    return reversed;
}
console.log(reverseSolutionOne("apple"))

function reverseSolutionTwo(str){
    let reversed = '';
    for(let character of str){
        reversed = character + reversed;
    }
    return reversed;
}
console.log(reverseSolutionTwo("apple"))

function reverseSolutionThree(str) {
    return str
            .split('')
            .reduce((rev, char) => char + rev, '');
}
console.log(reverseSolutionThree("apple"))

function reverseSolutionFour(str){
    return str
            .split("")
            .reverse()
            .join("");
}
console.log(reverseSolutionFour("apple"))