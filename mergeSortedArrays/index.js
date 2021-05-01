/*
marge two sorted array that output sorted array
input : [0,3,4,31], [4,6,30]
output: [0,3,4,4,6,30,31]
*/

function concatSortedArray(array1, array2) {
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

console.log('[0,3,4,4,6,30,31] = ',concatSortedArray([0,3,4,31], [4,6,30]))