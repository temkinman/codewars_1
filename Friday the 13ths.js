/*
Create the function fridayTheThirteenths that accepts a start year and an end year (inclusive),
 and returns all of the dates where the 13th of a month lands on a Friday in the given range of year(s).

The return value should be a string where each date is seperated by a space.
The date should be formatted like 9/13/2014 where months do not have leading zeroes and are separated with forward slashes.

If no end year is given, only return friday the thirteenths during the start year.

Examples
fridayTheThirteenths(1999, 2000) 
  // returns "8/13/1999 10/13/2000"
  
fridayTheThirteenths(2014, 2015) 
  // returns "6/13/2014 2/13/2015 3/13/2015 11/13/2015"
  
fridayTheThirteenths(2000)
  // returns "10/13/2000"
This kata was designed to use the built-in Date object. Dates can often be finicky, so while there are other methods to get the correct dates,
 I can't gurantee they will work.
*/

function fridayTheThirteenths(start, end) {
    let result = '';
    // end = end ? end : start;
    end = end || start;
    end
    for(let year = start; year <=end; year++) {
        for(let month = 0; month < 12; month++ ) {
            const date = new Date(year, month, 13);
            result += date.getDay() === 5 ? ` ${date.getMonth() + 1}/${date.getDate()}/${(date.getFullYear())}` : '';
        }
    }
    return result.trim();
}

console.log(fridayTheThirteenths(1999, 2000)); //  "8/13/1999 10/13/2000"
console.log(fridayTheThirteenths(2020)); //  "10/13/2000"