/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers.
 The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
  Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

function findOutlier(integers) {
  let oddNumbers = [];
  let evenNumbers = [];

  for (let number of integers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
    if (oddNumbers.length >= 2 && evenNumbers.length > 0) {
      return evenNumbers[0];
    }
    if (evenNumbers.length >= 2 && oddNumbers.length > 0) {
      return oddNumbers[0];
    }
  }
}

/*
function findOutlier(integers){
  const even = integers.filter(int => int % 2 === 0);
  const odd  = integers.filter(int => int % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}
*/

// let arr = [0, 1, 2] //1
// let arr = [1, 2, 3] //2
// let arr = [2, 6, 8, 10, 3] //3
// let arr = [0, 0, 3, 0, 0] //3
let arr = [1, 1, 0, 1, 1]; //0

console.log(findOutlier(arr));
