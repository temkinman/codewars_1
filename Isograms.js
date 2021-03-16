/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

function isIsogram(str) {
  if (str.length === 0) {
    return true;
  }
  const letters = new Set();
  let result = true;
  [...str].map((el) => {
    if (letters.has(el.toLowerCase())) {
      result = false;
    }
    letters.add(el.toLowerCase());
  });
  return result;
}
/*
return !str.match(/([a-z]).*\1/i);

return !str || (str.length === new Set(str.toLowerCase()).size);
*/

console.log(isIsogram("Dermatoglyphics")); //true
console.log(isIsogram("aba")); //false
console.log(isIsogram("moOse")); //false
