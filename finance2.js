var seneca = require('seneca')()

seneca.add({ role:'finance', cmd:'test2' }, function (args, callback) {
  callback(null, { finance:"working" })
})

seneca.listen(8001)