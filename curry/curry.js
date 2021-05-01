let multiply = function(a,b,c) { return a*b*c; }
let add = function(a, b){ return a + b; }
let greeting = function(name){ return "Hello " + name; }

//---------------------first implementation-------------------------------
console.log("-----------------1-------------------")
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
console.log("----------------2--------------------")
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
console.log("-----------------3-------------------")
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

//------------------------Fourth implementation-----------------------------
console.log("-----------------4-------------------")
let curryWithArraySliceAndBind = function (fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.bind.apply(fn, [this].concat(args));
};

var result = curryWithArraySliceAndBind(multiply, 2, 3, 4)();
console.log('Multiply of 2*6*3 = ', result);

result = curryWithArraySliceAndBind(add, 10, 14)();
console.log('Addition of 10+14 = ', result);

result = curryWithArraySliceAndBind(greeting, 'Pervez')()
console.log('Greetings: ', result)
