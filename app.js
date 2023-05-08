const express=require('express')
const app=express()
const Home=require('./Home.js')
const AboutUs=require('./AboutUs.js')
const Contact=require('./Contact.js')
const Product=require('./Product.js')
const Services=require('./Services.js')
const Serviceform=require('./Serviceform.js')
app.set("view engine","ejs");
app.get("/",(request,response)=>{
    response.render("index");
});

//app.get('/',(request,response) =>
//{
    //response.send("Welcome to the website")
//})
app.listen(3500)
app.use('/Home',Home)
app.use('/AboutUs',AboutUs)
app.use('/Contact',Contact)
app.use('/Product',Product)
app.use('/Services',Services)
app.use('/Servicesform',Serviceform)
