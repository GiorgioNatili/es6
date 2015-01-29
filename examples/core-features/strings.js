var str = "To be in Chicago is an honor.";

console.log(str.contains("To be"));       // true
console.log(str.contains("question"));    // false
console.log(str.contains("Chicago"));     // false
console.log(str.contains("To be", 1));    // false

console.log(str.startsWith("To be"));
console.log(str.startsWith("To be", 2));

console.log(str.repeat(2));