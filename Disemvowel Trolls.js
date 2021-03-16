/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
    if(!str || str.length === 0) {
        return;
    }
    /*
    let result = '';
    const vowels = ['e', 'y', 'u', 'i', 'o', 'a', ];
    const words = str.split(' ');
    console.log(words)

    for(let word of words) {
        const letters = [...word];
        for(let letter of letters) {
            if(!vowels.includes(letter.toLowerCase())) {
                result += letter;
            }
        }
        result += ' ';
    }*/

  return str.replace(/[euioa]/gi, '');
}

console.log(disemvowel("This website is for losers LOL!"))