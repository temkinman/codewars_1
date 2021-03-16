/*
In this little assignment you are given a string of space separated numbers,
 and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

function highAndLow(numbers) {
  if (!numbers || numbers.length === 0) {
    return;
  }

  const convertedNumbers = numbers.split(" ").map((el) => parseInt(el, 10));
  const max = Math.max.apply(null, convertedNumbers);
  const min = Math.min.apply(null, convertedNumbers);
  return `${max} ${min}`;
}

/*
function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
*/
console.log(highAndLow("1 2 3 4 5"));
