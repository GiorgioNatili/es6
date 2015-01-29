var [x, y, z] = [1, 2, 3];
// is equivalent to...
var x = 1, y = 2, z = 3;

let [x, y] = [1, 2];
console.log(x, y); // 1, 2

[x, y] = [y, x]; // Swap the values of x and y
console.log(x, y); // 2, 1

// Return multiple values
function example() {
    return [1, 2, 3];
}

var [a, b, c] = example();
console.log(a, b, c); // 1, 2, 3