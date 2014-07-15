var test = (function () {
    var args = Array.from(arguments);
    return args;
}(1, 2, 3));                             

console.log(test);            // [1, 2, 3]

// ======================================================

function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) return false;
    }
    return (element > 1);
}

console.log( [4, 6, 8, 12].find(isPrime) ); // undefined, not found
console.log( [4, 5, 8, 12, 11].find(isPrime) ); // 5

// ======================================================

var array = new Array(4);
array.fill('es6');
console.log(array);     // [ 'es6', 'es6', 'es6', 'es6' ]


var obj = [].fill.call({length: 3}, 4); 
console.log(obj);       // {0: 4, 1: 4, 2: 4, length: 3}

// ======================================================

var sequence = [1, 4, 5, 8, 2, 6];

console.log(sequence.keys());     // Iterator {  }
console.log(Array.from(sequence.keys()));  // [ 0, 1, 2, 3, 4, 5 ]
