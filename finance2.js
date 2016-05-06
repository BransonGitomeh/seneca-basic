var seneca = require('seneca')()

seneca.add({ role:'finance2', cmd:'test' }, function (args, callback) {
  callback(null, { finance2:"working" })
})

seneca.listen({
	host: 'localhost',
	port: 8001,
  pin: 'role:finance2'
})