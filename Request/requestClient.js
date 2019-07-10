var textTransform = require('../Transforms/textTransform');

module.exports = {
    init: gamerTag => {
        return {
            performRequest: (resourceLocator) => {
                const value = textTransform.deMess(resourceLocator);

                return new Promise((resolve, reject) => {
                    //TODO: Perform request, final resourceLocator after processing is <locator>/gamerTag
                    resolve('');
                }); 
            }
        }
    }
};