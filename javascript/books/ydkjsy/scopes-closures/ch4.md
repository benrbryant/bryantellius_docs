# Chapter 4 Notes

JS programs are made up of many different JS files, and each JS file can be seen as an individual "program". There are three main ways that these files are loaded into the JS runtime environment.

1. ES Modules (without bundling) are loaded directly into the runtime
2. Modules (with bundling) are concatenated into and wrapped with local (usually function) scopes within a single file
3. Modules (with or without bundling) are loaded directly into the global scope

The global scope is where JS injects built-in functions and objects, such as `Math`, `Date`, `null`, `undefined`, etc, as well as values that exist per environment (e.g. browser or node), such as `console`, `window`, `setTimeout`, etc.

_Generally_, global scope is the _outer most scope_. For a JS file loaded in a browser, the global scope is anywhere in the file that is not within a locally created scope.

Node treats all files as modules, and as such creates "module-global" scopes per file. Node also has a `global` variable that is _somewhat_ equivalent to the browser's `window` object.
