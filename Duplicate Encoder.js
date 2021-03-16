/*
The goal of this exercise is to convert a string to a new string
 where each character in the new string is "(" if that character appears
  only once in the original string, or ")" if that character appears more than once in the original string.
   Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes

Assertion messages may be unclear about what they display in some languages.
 If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word) {
  let letters = new Set([...word]);
  if (letters.size === word.length) {
    return "(".repeat(word.length);
  }

  const replaceLetters = new Set();

  return [...word.toLowerCase()]
    .map((el, ind) => {
      if (word.toLowerCase().lastIndexOf(el) > ind || replaceLetters.has(el)) {
        replaceLetters.add(el);
        return (el = ")");
      } else {
        return (el = "(");
      }
    })
    .join("");
}

console.log(duplicateEncode("din")); //"((("
console.log(duplicateEncode("recede")); //"()()()"
console.log(duplicateEncode("Success")); //")())())"
// console.log(duplicateEncode("(( @")); //"))(("
console.log(duplicateEncode("Supralapsarian")); //")()))()))))()("
console.log(duplicateEncode("GGGFJ@ldSPmHcGyG")); //")))(((((((((()()"
/*
если символ в строке встречается один раз (как T и Q на скрине выше),
то заменяем его на '('. Если символ в строке встречается несколько раз (как P),
то заменяем все вхождения символа на ')'
*/


let str = "recede";
let s = "e";
console.log(str.replace(new RegExp(s, "g"), "a"));
console.log(str);
