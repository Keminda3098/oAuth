const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model')


passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>
{
    done(null,user);
});
});

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
            console.log("User is " +currentUser.username);
            done(null,currentUser)
        } else {
            new User({
                username: profile.displayName,
                googleId: profile.id,
                thumbnail:profile._json.image.url,
            }).save().then((newUser) => {
                console.log('new user is ' + newUser)
                done(null,newUser)
            });
        }
    });


}));
