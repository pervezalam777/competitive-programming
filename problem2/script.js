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