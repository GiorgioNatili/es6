function logEach(...things) {
    things.forEach(function (thing) {
        console.log(thing); // "a" "b" "c"
    });
}
logEach("a", "b", "c");

function example(a, b, c) {
    console.log(a, b, c); 
}
var args = [1, 2, 3];
example(...args); // 1, 2, 3