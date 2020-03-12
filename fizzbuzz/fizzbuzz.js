function fizzbuzz(n){
    for(let i = 1; i <= n; i++){
        let output = "";
        if(i % 3 === 0){
            output += "fizz";
        }
        if(i % 5 === 0){
            output += "buzz";
        }
        console.log(output == "" ? i : output);
    }
}

fizzbuzz(20);

console.log("---------------second solution------------------------")
function fizzbuzzSecond(n){
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz");
        } else if(i % 3 === 0){
            console.log("fizz");
        } else if(i % 5 === 0){
            console.log("buzz")
        } else {
            console.log(i);
        }
    }
}

fizzbuzzSecond(20);
