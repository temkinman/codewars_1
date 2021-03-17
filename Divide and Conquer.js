/*
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from
 the total of the non-string integers.

Return as a number.
*/

function divCon(x) {
  let numbers = 0;
  let strNumbers = 0;

  for (let number of x) {
    if (typeof number === "number") {
      numbers += number;
    }
    if (typeof number === "string") {
      strNumbers += +number;
    }
  }
  return numbers - strNumbers;
}

function divCon_2(x) {
  return x.reduce(
    (acc, cur) => (typeof cur === "number" ? acc + cur : acc - Number(cur)),
    0
  );
}

function divCon_3(x){
    const strings = x.filter(n => typeof n === 'string')
    const nums = x.filter(n => typeof n === 'number')
    
    const strSum = strings.reduce((acc, str) => acc += +str, 0)
    const numSum = nums.reduce((acc, str) => acc += str, 0)
  
    return numSum - strSum
  }

/*
return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)


*/

const ctreateArray = () => {
  let arr = [];
  for (let i = 0; i < 100_000; i++) {
    const el = Math.floor(Math.random() * 10);
    i % 2 === 0 ? arr.push(el) : arr.push(el.toString());
  }
  return arr;
};

const getTimeWork = (callBack, bigArray) => {
  const start = new Date();
  callBack(bigArray);
  const end = new Date();
  const second = (end.getTime() - start.getTime()) / 1000;
  return second.toFixed(2);
};
const bigArray = ctreateArray();

// const method_1 = getTimeWork(divCon, bigArray);
// const method_2 = getTimeWork(divCon_2, bigArray);
// const method_3 = getTimeWork(divCon_3, bigArray);
console.log('method_3 ', method_3);
console.log('method_1 ', method_1);
console.log(method_3 - method_1);
// console.log(method_2 - method_1 > 0 ? "divCon_2 slowler than divCon on" : "divCon_2 faster than divCon on " + (method_2 - method_1) + " second");
console.log(method_3 - method_1 > 0 ? "divCon_3 slowler than divCon on" : "divCon_3 faster than divCon on " + (method_3 - method_1) + " second");

// console.log(divCon(ctreateArray()));//2
// console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])); //14
// console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']));//13
