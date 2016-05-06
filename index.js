var koa = require('koa');
var app = koa()

var router = require('koa-router')();

//$ setup logic to log when the request is done
app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Responce-Time',ms + "ms")
});

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s',this.method,this.url,ms)
})

// $ the routers , split by with the routes
require("./restRouter")(router)

app
  .use(router.routes())
  .use(router.allowedMethods());

//start the server
app.listen(3000,function(err){
  if(err) console.log(err)
  console.log("Magic happening on 3000")
})
