const express=require('express')
const router=express.Router()
const pool=require('../models/database.js')


router.get('/',(req, res)=>{
res.render('equipos/añadir.ejs')
})

router.post('/', (req,res)=>{

    const qry= pool.query(`SELECT * FROM Procesadores`,(err,result)=>{
        result.forEach(element => {
            console.log(element)
        });
    })

    const data=Object.assign({},req.body)
    res.send(`Consulta realizada Datos: ${data}`)
    
})

module.exports=router