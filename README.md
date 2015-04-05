# typographic-single-spaces

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> [Always one—never two][rtfm]

Micro module to help eliminate one of the [bad typewriter habits][habits].


## Install

```sh
npm install --save typographic-single-spaces
```


## Usage

```js
var singleSpaces = require('typographic-single-spaces');

singleSpaces(`foo  bar`);  // foo bar
singleSpaces(`foo.  Bar`); // foo. Bar
singleSpaces(`foo,  bar`); // foo, bar
```


## Real world examples

Check complex usage with real world examples in [typography playground][playground].

[playground]: https://github.com/matmuchrapna/typographic-playground


## License

MIT © [Vladimir Starkov](http://vstarkov.com/)

[rtfm]: http://practicaltypography.com/one-space-between-sentences.html
[habits]: http://practicaltypography.com/typewriter-habits.html

[npm-url]: https://npmjs.org/package/typographic-single-spaces
[npm-image]: http://img.shields.io/npm/v/typographic-single-spaces.svg

[travis-url]: https://travis-ci.org/matmuchrapna/typographic-single-spaces
[travis-image]: http://img.shields.io/travis/matmuchrapna/typographic-single-spaces.svg

[coveralls-url]: https://coveralls.io/r/matmuchrapna/typographic-single-spaces
[coveralls-image]: http://img.shields.io/coveralls/matmuchrapna/typographic-single-spaces.svg

[depstat-url]: https://david-dm.org/matmuchrapna/typographic-single-spaces
[depstat-image]: https://david-dm.org/matmuchrapna/typographic-single-spaces.svg

[depstat-dev-url]: https://david-dm.org/matmuchrapna/typographic-single-spaces
[depstat-dev-image]: https://david-dm.org/matmuchrapna/typographic-single-spaces/dev-status.svg
