var it = ['yo', 'ya', 'yes', 'now', 'then'].keys();

//console.log(it.next().value, it.next().done);
//console.log(it.next().value, it.next().done);
//console.log(it.next().value, it.next().done);


var obj = {name: 'giorgio', surname: 'natili', twitter: '@giorgionatili'};
console.log(Array.from(obj).keys().next())


for (let [key, value] of Array.from(obj).keys()) {
      
console.log(key + " = " + value);

}



console.log(Array.from([ 'a', 'b' ].keys()));
console.log(Array.from([ 'aa', 'bb' ].entries()));
