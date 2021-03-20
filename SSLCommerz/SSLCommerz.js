const { SESSION_API, VALIDATION_API } = require('./api');

class SSLCommerz {
    constructor(is_sandbox = true, store_id = '', store_pass = '') {
        this.is_sandbox = is_sandbox;
        this.store_id = store_id;
        this.store_pass = store_pass;
        this.session_api = `https://${is_sandbox ? `sandbox` : `securepay`}.${SESSION_API}`;
        this.validation_api = `https://${is_sandbox ? `sandbox` : `securepay`}.${VALIDATION_API}`;
    }
}

module.exports = SSLCommerz;


