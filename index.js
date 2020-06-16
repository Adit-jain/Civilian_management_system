const path=require('path')

const express = require('express')
const bodyParser = require("body-parser");

const userRoute=require('./route/user')

const app=express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use('/',userRoute)

app.listen(3000,()=>{
    console.log("server is up and running")
})