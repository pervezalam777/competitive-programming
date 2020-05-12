function process(input){
    let inputArr = input.split('\n');
    let totalTestCase = parseInt(inputArr[0])
    if(totalTestCase < 1 || totalTestCase > 10){
        throw new Error('test case should be 1 <= T <= 10');
    }
    console.log("totalTestCase",totalTestCase)
    let output = [];
    for(let i = 1; i <= totalTestCase; i++){
        let [A, B] = inputArr[i].split(' ');
        A = parseInt(A);
        B = parseInt(B);
        if(B < 1 || B > 20){
            throw new Error('B should be 1 ≤ B ≤ 20');
        }
        if(B > A || A > 100){
            throw new Error('A should be B ≤ A ≤ 100')
        }
        let arr = runBusinessLogic(A, B)
        console.log(A, B);
        console.log('arr', arr);
        output.push(arr.reduce((p, n) => p * n, 1));
    }
    return output.join('\n');
}

function runBusinessLogic(A, B){
    let output = [];
    if(B === 1){
        return [A];
    }
    let divided = Math.floor(A/B);
    let remainder = A%B;
    let val = divided;
    while(val <= A){
        output.push(divided);
        val += divided;
    }
    if(remainder > 0){
        let last = output[output.length -1];
        last = last + remainder;
        output[output.length - 1] = last;
    }
    return output;
}

let input = 
`3
10 3
10 1
7 2`

let result = process(input);
console.log(result);
console.log('-----------------------------------------')
input = 
`3
12 3
20 4 
11 2`

result = process(input);
console.log(result);
