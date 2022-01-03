const express=require('express')
const router=express.Router()
const pool=require('../models/database.js')


router.get('/',(req, res)=>{
res.render('equipos/añadir.ejs')
})


router.post('/', (req,res)=>{


    pool.query(`SELECT * FROM Procesadores`,(err,result)=>{
        const datos=Object.assign({},result[0])
        result.forEach(element => {
            
            console.log(element)

        });
        console.log(`DATOS: ${datos.IP}`)
        
    })

    const data=Object.assign({},req.body)
    res.send(`Consulta realizada Datos: ${data}`)
    
})

module.exports=router