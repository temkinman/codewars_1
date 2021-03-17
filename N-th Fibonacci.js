/*
I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
*/

function nthFibo(n) {
  function fibonacci_series(number) {
    if (number === 1) {
      return [0, 1];
    } else {
      let s = fibonacci_series(number - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
  }
  const numbers = fibonacci_series(n);
  return numbers[n-1];
}

/*
let [prev, curr] = [0, 1];
  for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
  return prev;
*/

console.log(nthFibo(4));