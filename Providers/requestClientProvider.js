var requestClient = require('../Request/requestClient');

module.exports = {
    construct: code => requestClient.init(code)
};