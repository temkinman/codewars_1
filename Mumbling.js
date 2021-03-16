/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

function accum(s) {
  const result = [];
  Array.from(s).map((el, ind) => {
    let res = "";
    for (let i = 0; i <= ind; i++) {
      res += i === 0 ? el.toUpperCase() : el.toLowerCase();
    }
    result.push(res);
  });
  return result.join("-");
}

function accum2(s) {
  return s
    .split("")
    .map((el, ind) => el.toLowerCase().repeat(ind))
    .join("-");
}

console.log(accum("ZpglnRxqenU"));
console.log(accum2("ZpglnRxqenU"));
