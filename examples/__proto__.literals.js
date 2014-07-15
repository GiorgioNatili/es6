var arrayPrototype = Object.create(Array.prototype);

var obj = {__proto__: Array.prototype};
obj.push('one');
obj.push('two');
obj.push('thre');

console.log(obj);