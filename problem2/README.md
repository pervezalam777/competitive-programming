# Maximal Square
Have the function MaximalSquare(strArr) take the strArr parameter being passed which will be a 2D matrix of 0 and 1's, 
and determine the area of the largest square submatrix that contains all 1's. A square submatrix is one of equal width 
and height, and your program should return the area of the largest submatrix that contains only 1's. For example: 
if strArr is ["10100", "10111", "11111", "10010"] then this looks like the following matrix:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

For the input above, you can see the bolded 1's create the largest square sub-matrix of size 2x2, so your program should 
return the area which is 4. You can assume the input will not be empty.


```javascript
function MaximalSquare(strArr) { 
    let auxiliary = strArr.map(function(item){
        return item.split("").map(function(num){
            return parseInt(num);
        })
    })
    return subMatrix(auxiliary, auxiliary.length, auxiliary[0].length); 
}
  
function subMatrix(arrA, row, cols) {
    var maxSize = 0;
    var sub = JSON.parse(JSON.stringify(arrA));
    for (var i = 1; i < row; i++) {
        for (var j = 1; j < cols; j++) {
            if (arrA[i][j] == 1) {
                let value = Math.min(sub[i - 1][j - 1],
                               Math.min(sub[i][j - 1], sub[i - 1][j])) + 1;
                maxSize = maxSize < value ? value : maxSize;		             
                sub[i][j] = value;
            } else {
                sub[i][j] = 0;
            }
        }
    }
    return maxSize;
}

module.exports = MaximalSquare;
```
## Run test file with node

```bash
> node test.js
```