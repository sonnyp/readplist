readplist
=========

Tiny Node.js module to read any plist file.

[![Travis](https://img.shields.io/travis/sonnyp/readplist/master.svg?style=flat-square)](https://travis-ci.org/sonnyp/readplist/branches)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Uses [plutil](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/plutil.1.html) which is only available on OS X.

## Install

`npm install readplist`

## Usage

```javascript
var readplist = require('readplist');
var PATH = '/Applications/App\ Store.app/Contents/Info.plist';

readplist(PATH, function(err, plist) {
  if (err) return console.error(err);
  console.log(plist.MDItemKeywords)
});
```

## Test

```npm install -g standard
npm test
```
