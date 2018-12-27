const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model')

passport.use(new GoogleStrategy({
    //options for google strat
    //.save retuns a promise .call back inside then wil, tel you what to do when save is finishded
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
            //already have the user
            console.log("User is " +currentUser.username)
        } else {
            new User({
                username: profile.displayName,
                googleId: profile.id
            }).save().then((newUSer) => {
                console.log('new user is ' + newUSer)
            });
        }
    });


}));
