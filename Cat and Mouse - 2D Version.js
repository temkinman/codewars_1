/*
You will be given a string (map) featuring a cat "C" and a mouse "m". The rest of the string will be made up of dots (".") The cat can move the given number of moves up, down, left or right, but not diagonally.
You need to find out if the cat can catch the mouse from it's current position and return "Caught!" or "Escaped!" respectively.

Finally, if one of two animals are not present, return "boring without two animals".

Examples
moves = 5

map =
..C......
.........
....m....

returns "Caught!" because the cat can catch the mouse in 4 moves
moves = 5

map =
.C.......
.........
......m..

returns "Escaped!" because the cat cannot catch the mouse in  5 moves

*/

function catMouse(map, moves){
    const CAT = 'C';
    const MOUSE = 'm';
    if (map.indexOf(CAT) < 0 || map.indexOf(MOUSE) < 0) {
        return "boring without two animals";
    }

    const stages = map.split('\n');
    let catStage = -1;
    let mouseStage = -1;

    for(let i = 0; i < stages.length; i++) {
        if(stages[i].indexOf(CAT) > -1) {
            catStage = i;
        }
        if(stages[i].indexOf(MOUSE) > -1) {
            mouseStage = i;
        }
    }

    if(catStage > -1 && mouseStage > -1) {
        const stepsBetweenStages = Math.abs(mouseStage - catStage);
        const stepsOnStage = Math.abs(stages[mouseStage].indexOf(MOUSE) - stages[catStage].indexOf(CAT));
        const allSteps = stepsBetweenStages + stepsOnStage;
        return moves >= allSteps ? "Caught!" : "Escaped!"
    }
  }


  /*
  function catMouse(map,moves){
  var c = [];
  var m = [];
  map = map.split("\n");
  map.filter((a,i)=>(a.indexOf("C") != -1) ? c = [a.indexOf("C"),i] : "");
  map.filter((a,i)=>(a.indexOf("m") != -1) ? m = [a.indexOf("m"),i] : "");
  if (c.length == 0 || m.length == 0){ return "boring without two animals" }
  var mU = Math.abs(c[1]-m[1])+Math.abs(c[0]-m[0]);
  return (mU > moves) ? "Escaped!" : "Caught!";
}
  */

/*
  var map=
`..C......
.........
....m....`
console.log(catMouse(map,5)) //'Caught!')

map=
`.C.......
.........
......m..`
console.log(catMouse(map,5))// 'Escaped!'


map=
`..C......
.........
.........`
console.log(catMouse(map,5)) *///'boring without two animals'


map =
`.........
.m.......
.........
.........
.........
.........
.........
......C..`

// console.log(catMouse(map,5));

map = 
`..................
..........m.......
C.................
..................
..................
..................
..................
..................`
console.log(catMouse(map,9));