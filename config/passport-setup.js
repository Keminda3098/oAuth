const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(new GoogleStrategy({
    //optiobs for google strat
    clientID:'354087886803-rn6gdvgdeog67kmpnqbppret33qu8n84.apps.googleusercontent.com',
    clientSecret:'x_wbTMDt6Cabi_zDS9mf5nGM'
}), () => {
    //passport callback function
});
