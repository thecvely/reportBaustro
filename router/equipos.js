const express=require('express')
const router=express.Router()

router.get('/',(req, res)=>{
res.render('equipos/añadir.ejs')
})

module.exports=router