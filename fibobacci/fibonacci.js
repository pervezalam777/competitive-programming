//0,1,1,2,3,5,8,13

function fib(n){
    if(n < 2){ return n}
    let last = 1;
    let secondLast = 1;
    for (let index = 2; index < n; index++) {
        let temp = secondLast;
        secondLast = last;
        last = secondLast + temp;
    }
    return last;
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(5));
console.log(fib(8));
//------------------------------------
// runtime complexity is leaner 
function fibonacci(n){
    let result = [0, 1];
    if(n < 2){
        return result[n];
    }
    for (let index = 2; index <= n; index++){
        let previous = result[index - 1];
        let secondPervious = result[index - 2];
        result.push(previous + secondPervious);
    }
    return result[n];
}
console.log("------------------------")
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(8));
//-------------------------------------------
// Following is not good for performance perspective.
// Run time complexity is 
function fibRecursion(n){
    if(n <= 1){
        return n;
    }
    return fibRecursion(n-1) + fibRecursion(n-2)
}
console.log("--------------------------")
console.log(fibRecursion(0));
console.log(fibRecursion(1));
console.log(fibRecursion(5));
console.log(fibRecursion(8));