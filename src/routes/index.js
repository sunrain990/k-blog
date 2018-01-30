/**
 * Created by kevin on 16/8/10.
 */
var fs = require('fs');

function register(app){
    var dirname = 'api';

    fs.readdirSync(__dirname+'/'+dirname)
        .filter(function(file) {
            return (file.indexOf('.') !== 0) &&
                // (file !== basename) &&
                (file.slice(-3) === '.js');
        })
        .forEach(function(file) {
            require('./' +dirname+'/'+ file)(app)
        });
}

module.exports = register;