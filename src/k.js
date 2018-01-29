const Koa = require('koa')
const app = new Koa()

// inject global
require('./config/glob')

// inject koa
require('./config/koa')(app)

// inject router
require('./routes')(app)


// var Router = require('koa-router');
// var router = new Router();
//
// router.get('/', async(ctx) => {
//     // ctx.body = 'Home Page';
//     await ctx.render('index')
// }); // responds to "/"
// app.use(router.routes());
// app.use(router.allowedMethods());




const port = process.env.PORT || 1314

const server = require('http').Server(app.callback());
const io = require('socket.io')(server)
require('./config/sockets')(io)

server.listen(port, () => {
    console.log(`K server  is starting port ${port}`)
})