/**
 * Created by kevin on 17/1/2.
 */
module.exports = getIP

function getIP() {
    return async(ctx, next) =>{
        console.log(ctx.ip, ctx.ips, 'this is ip');
    }
}