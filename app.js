const express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes')
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys')

//setup view engine
app.set('view engine', 'ejs');

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI,()=>
{
    console.log("conneted to mongodb")
})
//setup routes
app.use('/auth',authRoutes);

//create home route
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});