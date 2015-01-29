## es6-hello-world

ES6 _hello-world_ example based upon the [es6-bolierplate](https://github.com/davidjnelson/es6-boilerplate.git) repository, once cloned the repo install the dependencies

```bash
npm install
bower install
```
and the run the project in the browser

```bash
gulp build
gulp serve

### How to load legacy libraries and code from amd modules or from browser globals?
If you have an amd or browser global module, add it to src/runtime-config.js under the paths object.  If it needs to
export a global, add it to the shim object, specifying the module name and the global name it exports.  Whether it's
an amd module or a shimmed browser global, add it to the require call at the bottom of runtime-config.js so that
the build process sees it and concatenates it.

In the following example, the traceur runtime exports a global through the shim, and jquery is loaded as an amd module:
```js
require.config({
    // put both amd and browser global modules here
    paths: {
        assert: '../node_modules/rtts-assert/dist/amd/assert',
        traceur: '../bower_components/traceur-runtime/traceur-runtime',
        jquery: '../bower_components/jquery/dist/jquery'
    },
    // put any browser global modules here
    shim: {
        'traceur': {
            exports: '$traceurRuntime'
        }
    }
});

// put amd and browser global modules here so that the requirejs optimizer knows to concatenate them
require(['traceur', 'jquery'], function() {

});
```

