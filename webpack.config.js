const path = require('path');

module.export = {
    entry: './starter/src/js/index.js',
    output: {
        path: path.resolve(__dirname),
        filename:'bundle.js'
    }

};