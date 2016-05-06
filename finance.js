var seneca = require('seneca')()

seneca.add({ role:'finance1', cmd:'test' }, function (args, callback) {
  callback(null, { finance1:"working" })
})

seneca.listen({
	host: 'localhost',
	port: 8000,
  pin: 'role:finance1'
})