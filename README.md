es6
===

Getting started with ECMA 6 today using shims and transpilers. Using the new features is finally possible to write a more SOLID (Single responsibility, Open-closed, Liskov substitution, Interface segregation and Dependency inversion) JavaScript code.

Tools
-------------

### Browsers & Co.
If you want to start to trye the new capabilities of ECMA6 today you can
use one of the following browser:

*   [Firefox Aurora (Nightly Build)](http://nightly.mozilla.org/)
*   [Chrome Canary (Nightly
    Updates)](http://www.google.com/intl/en/chrome/browser/canary.html)
*   Your current borwser running [es6fiddle](http://www.es6fiddle.net/)

In order to run ECMA 6 today for production the fast path to do it is to
run a build time transpilation task, following a list of the most
popuplar Grunt tasks available today,
[here](https://github.com/addyosmani/es6-tools) you can instad find a
detailed list of the tasks avaialble also for different envrionments. 

### Grunt Tasks
* Traceur: [grunt-traceur](https://github.com/aaronfrost/grunt-traceur)
  ES6 > ES5 transpilation,
[grunt-traceur-build](https://github.com/tarruda/grunt-traceur-build)
* ES6 Module Transpiler:
  [grunt-es6-module-transpiler](https://github.com/joefiorini/grunt-es6-module-transpiler)
* Regenerator:
  [grunt-regenerator](https://github.com/sindresorhus/grunt-regenerator)
- ES6 generator functions to ES5
* [grunt-microlib](https://github.com/thomasboyt/grunt-microlib) - tools
  for libs using ES6 module transpiler (sample
[Gruntfile](https://github.com/jakearchibald/ES6-Promises/blob/c3336087fffc52e66cf5398e5b56b23a291080fc/Gruntfile.js))
* [grunt-defs](https://github.com/EE/grunt-defs) - ES6 block scoped
  const and let variables, to ES3
* es6-transpiler:
  [grunt-es6-transpiler](https://github.com/sindresorhus/grunt-es6-transpiler)
- ES6 → ES5
