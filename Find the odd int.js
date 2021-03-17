/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  if (!A || A.length === 0) {
    return 0;
  }

  const uniqNumbers = new Set(A);
  for (let number of uniqNumbers) {
    const count = A.filter((el) => el === number).length;
    if (count % 2 !== 0) {
      return number;
    }
  }
  return 0;
}

/*
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  */

// let arr = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];// 5
// let arr = [20,1,1,2,2,3,3,5,5,4,20,4,5];// 5
// let arr = [10];// 10
// let arr = [1,1,1,1,1,1,10,1,1,1,1];// 10
// let arr = [5,4,3,2,1,5,4,3,2,10,10];// 1
// let arr = [1,1,2,-2,5,2,4,4,-1,-2,5];// -1

// console.log(findOdd(arr));
