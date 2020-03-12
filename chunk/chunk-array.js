function chunk(array, size){
    // clone the array to keep the function pure.
    let cloneArr = JSON.parse(JSON.stringify(array))
    let chunkedArray = [];
    while(cloneArr.length > 0){
        chunkedArray.push(cloneArr.splice(0,size));
    }
    return chunkedArray;
}

console.log(chunk([1,2,3,4], 2));
console.log(chunk([1,2,3,4,5], 2));

console.log("----------second solution----------");
function chunkSecond(array, size){
    let chunkedArray = []
    for(let element of array){
        const last = chunkedArray[chunkedArray.length -1];
        console.log(last)
        if(!last || last.length === size){
            chunkedArray.push([element])
        } else {
            last.push(element)
        }
    }
    return chunkedArray;
}

console.log(chunkSecond([1,2,3,4], 2));
console.log(chunkSecond([1,2,3,4,5], 2));

console.log("---------third solution---------")
function chunkThird(array, size){
    const chunkedArray = [];
    let index = 0;
    while(index < array.length){
        chunkedArray.push(array.slice(index, index+size))
        index += size;
    }
    return chunkedArray;
}

console.log(chunkSecond([1,2,3,4], 2));
console.log(chunkSecond([1,2,3,4,5], 2));