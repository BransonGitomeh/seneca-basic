var seneca = require('seneca')()
.client({
	port: 8000,
	pin: 'role:finance1'
})

.client({
	port: 8001,
	pin: 'role:finance2'
})

module.exports = (router) => {
	router.all("/", function *(){

		seneca.act("role:finance1, cmd:test",function(msg,responce){
			console.log(responce)
		})
		
		seneca.act("role:finance2, cmd:test",function(msg,responce){
			console.log(responce)
		})

		seneca.act("role:finance2, cmd:test",function(msg,responce){
			console.log(responce)
		})

		this.body = "the force has began"
	})
}