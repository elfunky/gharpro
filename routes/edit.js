const router = require('express').Router();
const UserModel = require('../schema/userSchema');

//Route to render edit page
router.get('/edit/:userId', function(req, res) {
    console.log(req.params);
    UserModel.findOne({ _id: req.params.userId }, function(err, user) {
        if (err)
            throw err;
        else
            res.render('edit', { user: user });
    })
});

//Route To Update User Data
router.post('/edit', function(req, res) {
    UserModel.findOneAndUpdate({ _id: req.body._id }, { $set: req.body }, function(err) {
        if (err)
            throw err;
        else
            res.redirect('/');
    })
});


//Route To Delte User
router.get('/delete/:userId', function(req, res) {
    UserModel.findOneAndDelete({ _id: req.params.userId }, function(err) {
        if (err)
            throw err;
        else
            res.redirect('/');
    })
})
module.exports = router;