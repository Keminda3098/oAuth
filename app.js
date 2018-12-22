const express = require('express');
const app = express();

//setup view engine
app.set('view_engine','ejs');


app.get('/',(req,res)=>{
res.render('home');
})
app.listen(3000,()=>{
    console.log('app now listening for requests on port 3000');
});