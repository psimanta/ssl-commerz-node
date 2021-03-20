const FormData = require('form-data');

module.exports = (postData) => {
    let form = new FormData();
    for (let key in postData) {
        if (!postData[key]) continue;
        form.append(key, postData[key]);
    }
    return form;
}