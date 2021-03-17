/*
The number 198 has the property that 198 = 11 + 99 + 88, i.e., if each of its digits is concatenated twice and then summed,
 the result will be the original number. It turns out that 198 is the only number with this property.
  However, the property can be generalized so that each digit is concatenated n times and then summed.

eg:-

original number =2997 , n=3
2997 = 222+999+999+777 and here each digit is concatenated three times.

original number=-2997 , n=3

-2997 = -222-999-999-777 and here each digit is concatenated three times.

*/

const checkConcatenatedSum = (number, n) => {
    let absNumber = Math.abs(number);
    let result = 0;
    while(absNumber > 0) {
        const lastNumber = absNumber % 10;
        result += +lastNumber.toString().repeat(n);
        absNumber = Math.floor(absNumber / 10);
    }
    return result === Math.abs(number);
}
/*
function checkConcatenatedSum(x, n) {
  x = Math.abs(x)
  
  return `${x}`
    .split``
    .map(x => Number(x.repeat(n)))
    .reduce((a,b) => a + b) === x
}
*/
console.log(checkConcatenatedSum(-2997, 3));
// checkConcatenatedSum(-2997, 3);