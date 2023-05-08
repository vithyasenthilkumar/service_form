const express = require('express')
const router=express.Router()
router.get('/',(request,response)=>{
    response.send("This is Home page")
})
module.exports = router