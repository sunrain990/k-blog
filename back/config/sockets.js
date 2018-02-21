/**
 * Created by kevin on 17/4/6.
 */
module.exports = function(io) {
    io.on('connection', function(socket) {
        console.log(socket.id)
        socket.emit('news', { hello: 'world' })
        socket.on('my other event', function(dt) {
            console.log(dt)
        })
    })
}