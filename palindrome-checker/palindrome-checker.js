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

