const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(new GoogleStrategy({
    //options for google strat
    callbackURL:'/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken,refreshToken,profile,done) => {
   console.log("accessToken" + accessToken)
   console.log("profile" + JSON.stringify(profile))
}));
