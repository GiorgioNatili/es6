/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

var sequence = [1, 4, 5, 8, 2, 6];
var iterator = sequence.keys();

var obj = iterator.next();
while(!obj.done){
  
  console.log(obj.value);
  obj = iterator.next();
  
}

console.log('===============================================');

var arr = ['a', 'b', 'c'];
var eArr = arr.entries();

var obj = eArr.next();
while(!obj.done){
  
  console.log(obj.value);
  obj = eArr.next();
  
}

console.log('===============================================');

function* idGenerator(){
    var index = 0,
        val = '';
    while(true){
         index++;
         yield val = 'UID' + index;
    } 
}

var gen = idGenerator();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value);

console.log('===============================================');

let someArray = [1, 2, 3];
let [first, second, third] = someArray;

console.log(first, second, third);

