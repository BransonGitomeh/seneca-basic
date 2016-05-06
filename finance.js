var seneca = require('seneca')()

seneca.add({ role:'finance', cmd:'test' }, function (args, callback) {
  callback(null, { finance:"working" })
})

seneca.listen(8000)