/*
Who is the killer?
Some people have been killed!
You have managed to narrow the suspects down to just a few. Luckily,
 you know every person who those suspects have seen on the day of the murders.

Task.
Given a dictionary with all the names of the suspects and everyone
 that they have seen on that day which may look like this:

{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
and also a list of the names of the dead people:

['Lucas', 'Bill']
return the name of the one killer, in our case 'James' because 
he is the only person that saw both 'Lucas' and 'Bill'
*/

function killer(suspectInfo, dead) {
  for(let key in suspectInfo) {
    const count = suspectInfo[key].filter(el => dead.includes(el));
    if(count.length === dead.length) {
        return key;
    }
  }
}

const suspectInfo = {
  James: ["Jacob", "Bill", "Lucas"],
  Johnny: ["David", "Kyle", "Lucas"],
  Peter: ["Lucy", "Kyle"],
};

const dead = ['Lucas', 'Bill'];

console.log(killer(suspectInfo, dead));
