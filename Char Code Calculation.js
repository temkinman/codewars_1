/*
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/
function calc(x) {
  const sum = (number) => {
    return number.split("").reduce((accum, el) => (accum += +el), 0);
  };

  const number_1 = [...x]
    .map((el) => el.charCodeAt())
    .reduce((accum, el) => (accum += el), "");

  const number_2 = number_1.replace(/7/g, "1");
  const total_1 = sum(number_1);
  const total_2 = sum(number_2);

  return total_1 - total_2;
}

console.log(calc("aaaaaddddr"));
