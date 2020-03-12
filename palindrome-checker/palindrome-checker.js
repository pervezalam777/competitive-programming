function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9]/gi, "");
  let len = str.length;
  let mid = (len % 2 > 0) ? Math.floor(len/2)-1 : len/2;
  for(let i = 0; i < mid; i++){
    if(str[i] !== str[len-(i+1)]){
      return false;
    }
  }
  return true;
}

let words = ["noon", "night", "nitin", "radar", "civic", "level", "start", 
            "starts" , "race car", "A man, a plan, a canal. Panama"]

words.forEach(word => {
  let isPalindrome = palindrome(word);
  let part = (isPalindrome === true) ? "is" : "is not"
  console.log(`'${word}' ${part} palindrome` )
})

console.log("-----------second solution--------------");
function palindromeSolutionTwo(word){
  word = word.toLowerCase().replace(/[^a-z0-9]/gi, "");
  let reversed = word.split('').reverse().join('');
  return reversed === word;
}

words.forEach(word => {
  let isPalindrome = palindromeSolutionTwo(word);
  let part = (isPalindrome === true) ? "is" : "is not"
  console.log(`'${word}' ${part} palindrome` )
})

console.log("------------third solution-----------------")
function palindromeSolutionThree(word){
  word = word.toLowerCase().replace(/[^a-z0-9]/gi, "");
  return word.split('').every((char, i) => {
    return char === word[word.length - 1 - i];
  });
}

words.forEach(word => {
  let isPalindrome = palindromeSolutionThree(word);
  let part = (isPalindrome === true) ? "is" : "is not"
  console.log(`'${word}' ${part} palindrome` )
})
