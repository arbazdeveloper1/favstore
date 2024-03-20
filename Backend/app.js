const express = require('express');
const app = express()
// const cors = require('cors');
const mainRoute = require('./routes/route')
const connection = require('./db/connection');
const session=require('express-session');
const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())
app.use('/',mainRoute)





app.listen(9090,()=>{
    console.log("Server is running on port 9090")
})