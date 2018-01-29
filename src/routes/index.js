/**
 * Created by kevin on 16/8/10.
 */
var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);



function register(app){
    var dirname = 'api';
    console.log(__dirname+'/'+dirname);

    fs.readdirSync(__dirname+'/'+dirname)
        .filter(function(file) {
            console.log(file ,basename)
            return (file.indexOf('.') !== 0) &&
                // (file !== basename) &&
                (file.slice(-3) === '.js');
        })
        .forEach(function(file) {
            require('./' +dirname+'/'+ file)(app)
        });
}

module.exports = register;