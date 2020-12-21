var express = require('express');
var router = express.Router();
const UserModel = require('../schema/userSchema');

/* GET home page. */
router.get('/', function(req, res, next) {
  UserModel.find({}, function(err, users){
    if(err)
      throw err;
    else
      res.render('index', {users: users});
  })
});

module.exports = router;
