function pyramid(n){
    //1 = 1 + (1-1); 2 = 3 or 2 + (2-1); 3 = 5 or 3 + (3-1); 4 = 7 or 4 + (4-1)
    let columnLen = n + (n-1);
    let mid = Math.floor(columnLen / 2);
    for (let row = 0; row < n; row++) {
        let level = '';
        for (let column = 0; column < columnLen; column++) {
            const upperLimit = mid + row;
            const lowerLimit = mid - row;
            if(column >= lowerLimit && column <= upperLimit){
                level += "#"
            } else {
                level += " "
            }
        } 
        console.log(level);    
    }
}

pyramid(7);

console.log("----------second solution----------");

function pyramid2(n, row = 0, level=''){
    if(n === row){
        return;
    }
    let columnLen = n + (n-1);
    if(level.length === columnLen){
        console.log(level);
        return pyramid2(n, row + 1);
    }
    let mid = Math.floor(columnLen / 2);
    let upperLimit = mid + row;
    let lowerLimit = mid - row;
    let add = (level.length >= lowerLimit && level.length <= upperLimit) ? "#" : " ";
    return pyramid2(n, row, level+add);
}

pyramid2(7);