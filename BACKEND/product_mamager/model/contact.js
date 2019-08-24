var mongoose = require('mongoose');
var contact = new mongoose.Schema({ product_name: 'string', product_price: 'number' },{collection:'product_info'});
module.exports = mongoose.model('product_info', contact);