# SSLCOMMERZ Payment Gateway implementation in NodeJs
It is npm package which provides functionalities to implement SSLCommerze Payment Gateway in Node Based Apps.

## Installation
Via NPM
```bash
npm i ssl-commerz-node
```

## Instruction
```js
const SSLCommerz = require('ssl-commerze-node');
const PaymentSession = SSLCommerz.PaymentSession;
// For live payment set first parameter `false` and for sandbox set it `true`
const payment = new PaymentSession(true, YOUR_STORE_ID, STORE_STORE_PASS)

// Set the urls
payment.setUrls({ 
    success: 'yoursite.com/success', // If payment Succeed
    fail: 'yoursite.com/fail', // If payment failed
    cancel: 'yoursite.com/cancel', // If user cancel payment
    ipn: 'yoursite.com/ipn' // SSLCommerz will send http post request in this link
});

// Set order details
payment.setOrderInfo({
    total_amount: 1570, // Number field
    currency: 'BDT', // Must be three character string
    tran_id: 'ref12345667', // Unique Transaction id 
    emi_option: 0 // 1 or 0,
    multi_card_name: 'internetbank', // Do not Use! If you do not customize the gateway list, 
    allowed_bin: '371598,371599,376947,376948,376949', // Do not Use! If you do not control on transaction 
    emi_max_inst_option: 3,  // Max instalment Option
    emi_allow_only: 0 // Value is 1/0, if value is 1 then only EMI transaction is possible
});

```
See this for details: https://developer.sslcommerz.com/doc/v4/#ready-the-parameters