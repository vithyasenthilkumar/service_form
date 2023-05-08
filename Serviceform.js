const express = require('express')
const router=express.Router()
router.get('/index',(request,response)=>
{
    response.render('/index')
})
//router.get('/',(request,response)=>{
    //response.send("This is Serviceform")
//})
module.exports = router