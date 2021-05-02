/*
marge two sorted array that output sorted array
input : [0,3,4,31], [4,6,30]
output: [0,3,4,4,6,30,31]
*/

/**
 * Validate concat sorted array input 
 * @param {*} array1 
 * @param {*} array2 
 * @returns {String | undefined } return error string if supplied array is not valid, otherwise undefined 
 */
function validateConcatSortedArrayInput(array1, array2){
  if(!Array.isArray(array1) || !Array.isArray(array2)){
    return 'Invalid arguments: 2 argument expected with array type';
  }
  if(array1.length < 1 && array2.length < 1) {
    return 'Invalid arguments: at least one of the array should have some element'
  }
  return undefined;
}

/**
 * Concat sorted array
 * @param {*} array1 
 * @param {*} array2 
 * @returns {Array} return merged sorted array
 */
function concatSortedArray(array1, array2) {
  const validatedValue = validateConcatSortedArrayInput(array1, array2);
  if(validatedValue){
    throw new Error(validatedValue);
  }
  if(array1.length < 1){
    return [...array2];
  }
  if(array2.length < 1){
    return [...array1];
  }

  let indexArray1 = 0;
  let indexArray2 = 0;
  const margeArray = []
  while(indexArray1 < array1.length || indexArray2 < array2.length) {
    if(array1[indexArray1] < array2[indexArray2]) {
      margeArray.push(array1[indexArray1])
      indexArray1++
    } else {
      margeArray.push(array2[indexArray2])
      indexArray2++
    }

    if(indexArray1 == array1.length){
      while(indexArray2 < array2.length){
        margeArray.push(array2[indexArray2])
        indexArray2++
      }
      break;
    }
    if(indexArray2 == array2.length) {
      while(indexArray1 < array1.length){
        margeArray.push(array1[indexArray1])
        indexArray1++
      }
      break;
    }
  }
  return margeArray;
}

console.log('[0,3,4,4,6,30,31] = ', concatSortedArray([0,3,4,31], [4,6,30]));
console.log('[0, 3, 4] = ', concatSortedArray([0, 3, 4], []));
console.log('[0, 3, 4] = ', concatSortedArray([], [0, 3, 4]));
try {
  concatSortedArray([], []);
} catch(error){
  console.log(error.message);
}
try {
  concatSortedArray('a', 'b');
} catch(error){
  console.log(error.message);
}