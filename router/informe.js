const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.render('report.ejs',{data:'Envío de datos a report.ejs'})
})

router.get('/crear',(req,res)=>{
    res.render('makeReport.ejs',{data:'Ennvió de datos por get o post'})
})

/*
router.get('/makeReport',(req,res)=>{
    res.render('makeReport',{data:'Envío de datos a makereport.ejs'})
})
*/
module.exports=router