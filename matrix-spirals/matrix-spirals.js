function matrix(n){
    const result = [];
    for (let index = 0; index < n; index++){
        result.push([]);
    }
    let startColumn = 0;
    let endColumn = n - 1;
    let starRow = 0;
    let endRow = n - 1;
    let counter = 1;
    while(startColumn <= endColumn && starRow <= endRow){
        for(let i = startColumn; i <= endColumn; i++){
            result[starRow][i] = counter++;
        }  
        starRow++;
        for(let i = starRow; i <= endRow; i++){
            result[i][endColumn] = counter++;
        }
        endColumn--;
        for(let i = endColumn; i >= startColumn; i--){
            result[endRow][i] = counter++;
        }
        endRow--;
        for(let i = endRow; i >= starRow; i--){
            result[i][startColumn] = counter++;
        }
        startColumn++
    }
    return result;
}

console.log(matrix(5));