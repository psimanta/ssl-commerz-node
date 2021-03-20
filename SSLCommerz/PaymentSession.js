const SSLCommerz = require('./SSLCommerz');
const getFormData = require('./processFormData');
const fetch = require('node-fetch');

class PaymentSession extends SSLCommerz {
    constructor(is_sandbox = true, store_id = '', store_pass = '') {
        super(is_sandbox, store_id, store_pass);
        this.postData = {};
    }

    setSSLdata() {
        this.postData['store_id'] = this.store_id;
        this.postData['store_passwd'] = this.store_pass;
    }

    setUrls({ success, fail, cancel, ipn }) {
        this.setSSLdata();
        this.postData['success_url'] = success;
        this.postData['fail_url'] = fail;
        this.postData['cancel_url'] = cancel;
        this.postData['ipn_url'] = ipn;
    }

    setOrderInfo({ total_amount, currency, tran_id, emi_option, multi_card_name, allowed_bin, emi_max_inst_option, emi_selected_inst, emi_allow_only }) {
        this.postData['total_amount'] = total_amount;
        this.postData['currency'] = currency;
        this.postData['tran_id'] = tran_id;
        this.postData['multi_card_name'] = multi_card_name;
        this.postData['allowed_bin'] = allowed_bin;
        this.postData['emi_option'] = emi_option;
        this.postData['emi_max_inst_option'] = emi_max_inst_option;
        this.postData['emi_selected_inst'] = emi_selected_inst;
        this.postData['emi_allow_only'] = emi_allow_only;
    }

    setCusInfo({ name, email, add1, add2, city, state, postcode, country, phone, fax }) {
        this.postData['cus_name'] = name;
        this.postData['cus_email'] = email;
        this.postData['cus_add1'] = add1;
        this.postData['cus_add2'] = add2;
        this.postData['cus_city'] = city;
        this.postData['cus_state'] = state;
        this.postData['cus_postcode'] = postcode;
        this.postData['cus_country'] = country;
        this.postData['cus_phone'] = phone;
        this.postData['fax'] = fax;
    }

    setShippingInfo({ method, num_item, name, add1, add2, city, state, postcode, country }) {
        this.postData['shipping_method'] = method;
        this.postData['num_of_item'] = num_item;
        this.postData['ship_name'] = name;
        this.postData['ship_add1'] = add1;
        this.postData['ship_add2'] = add2;
        this.postData['ship_city'] = city;
        this.postData['ship_state'] = state;
        this.postData['ship_postcode'] = postcode;
        this.postData['ship_country'] = country;

    }

    setProductInfo({ product_name, product_category, product_profile }) {
        this.postData['product_name'] = product_name;
        this.postData['product_category'] = product_category;
        this.postData['product_profile'] = product_profile;
    }

    async paymentInit() {
        try {
            const response = await fetch(this.session_api, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer', // no-referrer, *client
                body: getFormData(this.postData), // body data type must match "Content-Type" header
            })
            const data = await response.json();
            return data;
        } catch (error) {
            return error;
        }
    }
}

module.exports = PaymentSession;