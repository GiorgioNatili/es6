var target = {age: 1};
var handler = {
  get: function (receiver, name) {
    console.log(receiver)
    return `Hello, ${name}!`;
  }
};

var p = new Proxy(target, handler);

console.log(p.world);
console.log(p.username);