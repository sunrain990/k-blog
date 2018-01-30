/**
 * Created by kevin on 16/8/10.
 */
// os
const path = require('path');

//静态页面
const static = require('koa-static');

//路由refer routes

//Cors is currently not needed
// let cors = require('koa-cors');

// parse body
let xmlParser = require('koa-xml-body');
let bodyParser = require('koa-bodyparser');

const views = require('koa-views')


// var jwt_auth_mid = require('../middlewares/jwt-auth-mid');

// session
let session = require('koa-session');
//压缩服务
let compress = require('koa-compress');
// error handle
const onerror = require('koa-onerror');


// custom middlewares
const responseTime = require('../middlewares/x-response-time');



// //静态缓存文件
// let staticCache = require('koa-static-cache');



// config variables
const staticPath = '../static'
const viewPath = '../view'

module.exports = function(app) {


    // responseTime
    app.use(responseTime());

    app.use(views(path.resolve(__dirname, viewPath), {
        extension: 'ejs'
    }))

    // static server
    app.use(static(
        path.join( __dirname,  staticPath)
    ))


    app.use(xmlParser());
    app.use(bodyParser());

    // jwt authentify
    // app.use(jwt_auth_mid());

    // koa
    app.use(compress());
    app.keys = ['session'];
    app.use(session(app));

    onerror(app);
}