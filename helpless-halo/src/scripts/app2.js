var express = require('express')

var app = express()
const csp = 'Content-Security-Policy'

app.use(
  express.static('public', {
    setHeaders: function (res, path) {
      res.set('Content-Security-Policy', csp)
    },
  })
)
var listener = app.listen(8080, function () {
  console.log('Listening on port ' + listener.address().port)
})