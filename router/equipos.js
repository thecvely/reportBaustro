const express=require('express')
const router=express.Router()
const {pool}=require('../models/database.js')
const {mycpu}=require('../models/database.js')

router.get('/',(req, res)=>{
res.render('equipos/añadir.ejs')
})

let datos={}
router.post('/', (req,res)=>{

    const data=Object.assign({},req.body)
    console.log(`DATOS OUT: `)
    console.log(data)

    pool.query(`SELECT * FROM Procesadores`,(err,result)=>{
        datos=Object.assign({},result[0])
        result.forEach(element => {
            
           // console.log(element)

        });
        console.log(`DATOS: ${datos.IP}`)
        
    });

    mycpu.Codigo=data.in0c0
    mycpu.IP= data.in1c0
    mycpu.Hostname= data.in1c1
    mycpu.Usuario= data.in0c1
    mycpu.MAC= data.in2c1
    mycpu.P_Model= data.in1c2
    mycpu.P_Marca= data.in0c2
    mycpu.M_Serial= data.m_serial
    mycpu.M_Model=data.m_model
    mycpu.M_Marca= data.m_marca
    mycpu.Systema= data.so
    mycpu.OS_Arch= data.so_arch
    mycpu.OS_Version= data.so_ver
    mycpu.Estado= data.status
    mycpu.Puerto=data.port
    mycpu.Oficina= data.oficina
    pool.query(`INSERT INTO Procesadores set ?`, mycpu,(err,result)=>{
        console.log('Función Insert:')
        console.log(result)
    })
    res.send(`Consulta realizada Datos`)    
})

module.exports=router