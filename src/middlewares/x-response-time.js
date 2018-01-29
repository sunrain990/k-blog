/**
 * Created by kevin on 16/8/10.
 */
module.exports = responseTime;

/**
 * Add X-Response-Time header field.
 *
 * @return {Function}
 * @api public
 */

function responseTime() {
   return async(ctx, next) => {
       const start = Date.now();
       await next();
       const ms = Date.now() - start;
       ctx.set('X-Response-Time', `${ms}ms`);
   }
}