/*
I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

Passwords must abide by the following requirements:

More than 3 characters but less than 20.

Must contain only alphanumeric characters.

Must contain letters and numbers.
*/

function validPass(password){
    // let res =  /^[A-z0-9]{3,19}$/.test(password);
    // const res = /^[A-Za-z]+(?:[0-9])[a-zA-Z]+\d?{3,19}$/.test(password);
    // const res = /^(?=.{3,19}$)(([a-zA-Z]+(?:[0-9])+[a-zA-Z]+)|(^[0-9]+[a-zA-Z]+)|([a-zA-Z]+[0-9]+))/.test(password);
    const res = /^(?=.{3,19}$)(([A-Za-z]+(?:[0-9])+[A-Za-z]+)|(^[0-9]+[A-Za-z]+)|([A-Z]+[0-9]+))/.test(password);
    // ([a-zA-Z]+(?:[0-9])+[a-zA-Z!]+){3,19}|(^[0-9]+[a-zA-Z!]+){3,19}|([a-zA-Z!]+[0-9]+){3,19}$

    return res;
}

console.log(validPass('Username123')) // valid
console.log(validPass('Username')) // invalid
console.log(validPass('1Username')) // valid
console.log(validPass('123')) // invalid
console.log(validPass('a12')) // invalid
console.log(validPass('Username123!')) // invalid
console.log(validPass('ThisPasswordIsTooLong1234')) // invalid