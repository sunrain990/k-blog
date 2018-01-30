/**
 * Created by kevin on 16/8/10.
 */
var Router = require('koa-router');

function register (app) {
    var router = new Router();

    router.get('/:id', async(ctx) => {
        // ctx.body = 'Home Page';
        ctx.body = {
            id: ctx.params.id
        }
    });

    app.use(router.routes());
    app.use(router.allowedMethods());
}

module.exports = register;