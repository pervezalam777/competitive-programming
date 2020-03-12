function reverseIntSolutionOne(num){
    return parseInt((""+num).split('').reverse().join('')) * Math.sign(num);
}
console.log('980 reverse int is ', reverseIntSolutionOne(980));
console.log('981 reverse int is ', reverseIntSolutionOne(981));
console.log('-51 reverse int is ',reverseIntSolutionOne(-51));

console.log("--------- solution two ---------")
function reverseIntSolutionTwo(num){
    let inputInt = Math.abs(num);
    let reverseInt = 0;
    while(inputInt > 0){
        let remainder = inputInt % 10;
        if(reverseInt > 0) 
            reverseInt *= 10;
        reverseInt += remainder;
        inputInt = Math.floor(inputInt/10);
    }
    return reverseInt * Math.sign(num);
}
console.log('980 reverse int is ', reverseIntSolutionTwo(980));
console.log('981 reverse int is ', reverseIntSolutionTwo(981));
console.log('-51 reverse int is ',reverseIntSolutionTwo(-51));


