'use strict'

var PATH = '/Applications/App\ Store.app/Contents/Info.plist'

var fs = require('fs')
var benchmark = require('benchmark')
var readplist = require('./index')
var plistjs = require('plist')

var suite = new benchmark.Suite('plist')

// https://github.com/sonnyp/readplist
suite.add('readplist', function (deferred) {
  readplist(PATH, function (err, plist) {
    if (err) throw err
    deferred.resolve()
  })
}, {defer: true})

// https://github.com/TooTallNate/plist.js
suite.add('plistjs', function (deferred) {
  fs.readFile(PATH, 'utf8', function (err, content) {
    if (err) throw err
    plistjs.parse(content)
    deferred.resolve()
  })
}, {defer: true})

suite.on('cycle', function (event) {
  console.log(event.target.toString())
})
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({'async': true})
