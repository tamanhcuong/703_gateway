const getTokens = require('./auth/index');

module.exports = (router) => {
    router.route('/auth/get_tokens').post(getTokens);
}