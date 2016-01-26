'use strict'

var readplist = require('./index')
var PATH = '/Applications/App\ Store.app/Contents/Info.plist'

readplist(PATH, function (err, plist) {
  if (err) console.error(err)
  else console.log(plist)
})
