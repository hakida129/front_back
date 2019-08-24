var express = require('express');
var router = express.Router();
var contactModel = require('../model/contact.js');

/* GET home page. */
router.get('/', function(req, res, next) { });
/* API get data from mongoose. */
router.get('/getData01', function(req, res, next) {

  // get data
  contactModel.find({}, function(err, users) {
    if (err) throw err;
    res.send(users);
  });
 
});

/* GET add data. */
router.get('/add', function(req, res, next) {
  res.render('add',{});
 });
/* post add data. */
router.post('/add', function(req, res, next) {
  
   var mydata = {
     'product_name' : req.body.product_name,
     'product_price' : req.body.product_price
   }
   dulieu = new contactModel(mydata);
   dulieu.save();
   
  
 });

module.exports = router;
