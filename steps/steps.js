function steps(n){ 
    for(let i = 1; i <= n; i++){
        let str = ""
        let poundLen = i;
        for(let k = 1; k <= poundLen; k++){
            str += "#";
        }
        let spaceLen = n-i;
        for(let j = 1; j <= spaceLen; j++){
            str += " ";
        }
        console.log(str);
    }
}

steps(5);

console.log("-------------Second solution------------");

function steps2(n){
    for (let row = 0; row < n; row++) {
        let stair = ""
        for (let column = 0; column < n; column++) {
            if(column <= row){
                stair += "#"
            } else {
                stair += " "
            }
        } 
        console.log(stair);
    }
}

steps2(5);


console.log("-------------Third solution------------");

function steps3(n, row = 0, stair = ''){
    if(n === row){
        return;
    }
    
    if(n === stair.length){
        console.log(stair);
        return steps3(n, row+1);
    }
    const add = (stair.length <= row) ? "#" : " ";
    return steps3(n, row, stair+add);
}

steps3(5);