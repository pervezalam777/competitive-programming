0,1,1,2,3
function fib(n){
    if(n <= 1){ return 1}
    let last = 1;
    let secondLast = 1;
    for (let index = 2; index < n; index++) {
        let temp = secondLast;
        secondLast = last;
        last = secondLast + temp;
    }
    return last;
}

console.log(fib(4));

