var configurationValueProvider = require('./Providers/configurationValueProvider');
var codeProvider = require('./Providers/codeProvider');
var requestClientProvider = require('./Providers/requestClientProvider');

let resourceLocator = configurationValueProvider.getValue('resourceLocator');
let code = codeProvider.getPersonalCode();
let requestClient = requestClientProvider.construct(code);

requestClient.performRequest(resourceLocator)
    .then(x => console.log(x));