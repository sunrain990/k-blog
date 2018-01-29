/**
 * Created by kevin on 16/8/10.
 */
var Router = require('koa-router');

function register (app) {
    var router = new Router();

    router.get('/', async(ctx) => {
        // ctx.body = 'Home Page';
        await ctx.render('index')
    }); // responds to "/"

    // router.get('/ajaxtest', function *(){
    //     console.log('ajaxtest')
    //     this.body = 'Home Page';
    // }); // responds to "/"
    //
    // router.post('/abc', function *(){
    //     console.log(this.jwt_auth_result,' this is - - -result');
    //     this.body = 'Home Page';
    // }); // responds to "/"

    app.use(router.routes());
    app.use(router.allowedMethods());
}

module.exports = register;