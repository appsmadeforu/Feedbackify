// makes data accessible to other files.
// We could also add client ids for facebook.

if (process.env.NODE_ENV == 'production') {
    // in production
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}

