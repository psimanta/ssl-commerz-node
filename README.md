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
const payment = new PaymentSession(true, YOUR_STORE_ID, STORE_STORE_PASS)
// For live payment set first parameter false

```