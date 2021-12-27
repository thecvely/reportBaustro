const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.render('informes/index.ejs',{data:'Envío de datos a report.ejs'})
})

router.post('/crear',(req,res)=>{
    const data=Object.assign({},req.body)
    console.log(data)
    res.render('informes/crear.ejs',{dbuscar:data})
})



/*
router.get('/makeReport',(req,res)=>{
    res.render('makeReport',{data:'Envío de datos a makereport.ejs'})
})
*/
module.exports=router