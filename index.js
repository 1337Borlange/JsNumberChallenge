var configurationValueProvider = require('./Providers/configurationValueProvider');
var tagProvider = require('./Providers/tagProvider');
var requestClientProvider = require('./Providers/requestClientProvider');

let resourceLocator = configurationValueProvider.getValue('resourceLocator');
let gamerTag = tagProvider.getGamerTag();
let requestClient = requestClientProvider.construct(gamerTag);

requestClient.performRequest(resourceLocator)
    .then(x => console.log(x));