/*
Given the root node of a tree, return an array where each element is the width
of the tree at each level

---- example 
      0     // at this level only 1 node will be there
    / | \
   1  2  3 // at this level there are 3 nodes
   |     |
   4     5 //at this level there are 2 nodes
Answer : [1,3,2]
*/
import { ENode } from './nodeTree.js'
//console.log('wwwwww.....')

let sampleOne = new ENode(10, [
    new ENode(20, [
        new ENode(30, [])
    ]),
    new ENode(40, []),
    new ENode(50, [
        new ENode(60, []),
        new ENode(90, [])
    ]),
    new ENode(70, [])
])
//console.log('working...')
function sizeOfEachLevel(node){
    let level = [0];
    let iteratorArr = [node, null];
    //console.log(iteratorArr, level)
    while(iteratorArr.length > 1){
        let n = iteratorArr.shift();
        if(n === null && iteratorArr.length > 0){
            iteratorArr.push(n);
            level.push(0);
        } 
        if(n !== null){
            iteratorArr.push(...n);
            level[level.length -1 ] = ++level[level.length - 1]
        }
    }
    return level;
}

console.log(sizeOfEachLevel(sampleOne));

