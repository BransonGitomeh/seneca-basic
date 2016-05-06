var seneca = require('seneca')()
var finance2Client =	seneca.client(8001)
var financeClient = seneca.client(8000)

module.exports = (router) =>{
	router.all("/", function *(){
		
		finance2Client.act("role:finance, cmd:test2",function(msg,responce){
			console.log(responce)
		})

		financeClient.act("role:finance, cmd:test",function(msg,responce){
			console.log(responce)
		})

		this.body = "the force has began"
	})
}