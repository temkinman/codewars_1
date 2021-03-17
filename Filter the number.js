/*
Filter the number
Oh no! The number has been mixed up with the text. Your goal is to retreive the number from the text,
 can you return the number back to it's original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

*/

var FilterString = function (value) {
  return +value.replace(/[^0-9]/g, "");
};
/*
похожие решения
+value.replace(/\D/g, '');
parseInt(value.replace(/[^\d]/g, ""))
*/
console.log(FilterString("123")); //, 123, 'Just return the numbers');
console.log(FilterString("a1b2c3")); //, 123, 'Just return the numbers');
console.log(FilterString("aa1bb2cc3dd")); //, 123, 'Just return the numbers');
