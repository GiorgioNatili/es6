// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");

console.log(s.size);             // 2
console.log(s.has("hello"));     // true

console.dir(s); // add(), clear(), delete(), entries(), values(), forEach(), etc.

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.set('yo', 34);

console.log(m.size);           // 3
console.log(m.get(s) == 34);   // true

console.dir(m);  // get(), has(), delete(), entries(), keys(), set(), clear(), values(), etc.