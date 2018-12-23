const router = require('express').Router();
const passport = require('passport');
//auth login
router.get('/login', (req, res) => {
    res.render('login')
});


//auth logout
router.get('/logout', (req, res) => {
    //hande with passport
    res.send('logging out')
});


//auth google
router.get('/google', passport.authenticate('google',{
    scope:['profile']
}));

//callback route for google to redirect to
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send('you reach the call back uri');
});

module.exports = router;
