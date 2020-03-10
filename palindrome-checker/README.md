# Palindrome checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

## Code
```javascript

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

let words = ["noon", "night", "nitin", "radar", "civic", "level", "start", "starts" , "race car", "A man, a plan, a canal. Panama"]

words.forEach(word => {
  let isPalindrome = palindrome(word);
  let part = (isPalindrome === true) ? "is" : "is not"
  console.log(`'${word}' ${part} palindrome` )
})

```

## Run test file with node

```bash
> node palindrome-checker.js
```

## Reference
[freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker)