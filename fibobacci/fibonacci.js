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
// Run time complexity is O(2^n) or exponential
function fibRecursion(n){
    if(n <= 1){
        return n;
    }
    return fibRecursion(n-1) + fibRecursion(n-2)
}
console.log("Recursion --------------------------")
console.log(fibRecursion(0));
console.log(fibRecursion(1));
console.log(fibRecursion(5));
console.log(fibRecursion(8));
 
// ----------------------------------------------
/*
To improve performance of recursive solution of fibonacci 
we can use memoization, so following solution makes recursion 
bit fast to memoize same function call.
*/
function memoize(fn){
    const cache = {}
    return function(...args){
        if(cache[args]){
            return cache[args];
        }

        const result = fn.apply(null, args);
        cache[args] = result;
        return result;
    }
}

function fibRec(n){
    if(n <= 1){
        return n;
    }
    return fibMemo(n-1) + fibMemo(n-2)
}

let fibMemo = memoize(fibRec);

console.log("Recursion with Memo--------------------------")
console.log(fibMemo(0));
console.log(fibMemo(1));
console.log(fibMemo(5));
console.log(fibMemo(8));