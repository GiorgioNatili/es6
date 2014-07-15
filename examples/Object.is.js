Object.is("foo", "foo");     // true
Object.is(window, window);   // true

Object.is("foo", "bar");     // false
Object.is([], []);           // false

var test = {a: 1};
Object.is(test, test);       // true
