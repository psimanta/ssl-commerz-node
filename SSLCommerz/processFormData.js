const FormData = require('form-data');

module.exports = (postData) => {
    let fdata = new FormData();
    for (var property in postData) {
        fdata.append(property, postData[property])
    }
    return fdata;
}