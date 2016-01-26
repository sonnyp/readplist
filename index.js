'use strict'

var exec = require('child_process').exec
var normalize = require('path').normalize

module.exports = function readplist (path, cb) {
  exec('plutil -convert json "' + normalize(path) + '" -o -', function (err, stdout, stderr) {
    if (err) return cb(err)
    if (stderr) return cb(new Error(stderr))

    var plist
    try {
      plist = JSON.parse(stdout)
    } catch (e) {
      return cb(e)
    }
    cb(null, plist)
  })
}
