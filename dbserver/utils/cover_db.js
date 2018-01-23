var models = require('../models')

models['coreRulengModel'].sync({
    // do not use this
    force: true
}).then(function() {
   console.log('synced!')
});
