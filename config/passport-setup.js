const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(new GoogleStrategy({
    //optiobs for google strat
}), () => {
    //passport callback function
});
