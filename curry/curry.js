let multiply = function(a,b,c) { return a*b*c; }
let add = function(a, b){ return a + b; }
let greeting = function(name){ return "Hello " + name; }

//---------------------first implementation-------------------------------
function makeCurry(fun, ...rest){
    return function(...innerRest){
        if(fun.length === rest.length + 1){
            return fun.apply(null, [...rest, ...innerRest])
        } else {
            return makeCurry(fun, ...rest, ...innerRest);
        }
    }
}

var result = makeCurry(multiply)(2)(6)(3);
console.log('Multiply of 2*6*3 = ', result);

result = makeCurry(add)(10)(14);
console.log('Addition of 10+14 = ', result);

result = makeCurry(greeting)('Pervez')
console.log('Greetings: ', result)

//---------------------second implementation------------------------------
console.log("------------------------------------")
let curry = (fun, ...rest) => 
                    (...more) => 
                        (fun.length === rest.length + 1)
                        ? fun.apply(null, [...rest, ...more])
                        : curry(fun, ...rest, ...more)

var result = curry(multiply)(2)(6)(3);
console.log('Multiply of 2*6*3 = ', result);

result = curry(add)(10)(14);
console.log('Addition of 10+14 = ', result);

result = curry(greeting)('Pervez')
console.log('Greetings: ', result)

// -----------------------third implementation------------------------------
console.log("------------------------------------")
Function.prototype.curry = function(){
    var fn = this,
        args = Array.prototype.slice.call(arguments);
    if(fn.length === 1){
        return fn.apply(fn, args)
    }
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments);
        if(fn.length === args.length + 1){
            return fn.apply(fn, args.concat(innerArgs))
        } else {
            return fn.curry.apply(fn, args.concat(innerArgs))
        }
    }
}

var result = multiply.curry(2)(6)(3);
console.log('Multiply of 2*6*3 = ', result);

result = add.curry(10)(14);
console.log('Addition of 10+14 = ', result);

result = greeting.curry('Pervez')
console.log('Greetings: ', result)