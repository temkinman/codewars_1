/*
Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1}
*/

function count(array) {
  const names = {};
  for (let person of array) {
    if (names.hasOwnProperty(person)) {
      names[person] = names[person] + 1;
    } else {
      names[person] = 1;
    }
  }
  return names;
}

const count_2 = (array) => {
  return array.reduce((names, el) => {
    names.hasOwnProperty(el) ? names[el]++ : (names[el] = 1);
    return names;
  }, {});
};

function count_3(array) {
  return array.reduce(function (stack, value) {
    return stack[value] ? stack[value]++ : (stack[value] = 1), stack;
  }, {});
}

console.log(count(["james", "james", "john"]));
console.log(count_2(["james", "james", "john"]));
console.log(count_3(["james", "james", "john"]));
