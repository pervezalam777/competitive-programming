const MaximalSquare = require("./script");

var case1 = ["0000", "0000", "0000", "0000"];
var case2 = ["1111", "1111", "1111", "1111"];

var case3 = ["1111", 
             "1010",
             "1111",
             "1010"]

var case4 = ["1111", 
             "1110",
             "1111",
             "1010"]

var case5 = ["0111", 
             "1110",
             "1111",
             "1011"]


var case6 = ["1001", 
             "0110",
             "0110",
             "1001"]
             
var case7 = [ "010101", 
            "101010",
			 "011110", 
			 "001110",
			 "111111"];
                        
// keep this function call here 
console.log("case 1 should be 0 == ", MaximalSquare(case1)); // 0 
console.log("case 2 should be 4 == ", MaximalSquare(case2)); // 4
console.log("case 3 should be 1 == ", MaximalSquare(case3)); // 1
console.log("case 4 should be 3 == ", MaximalSquare(case4)); // 1
console.log("case 5 should be 2 == ", MaximalSquare(case5)); // 1
console.log("case 6 should be 3 == ", MaximalSquare(case7))