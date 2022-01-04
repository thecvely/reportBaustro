const mysql=require('mysql');
const {promisify}=require('util')

const mycpu={
    Codigo: '',
    IP: '',
    Hostname: '',
    Usuario: '',
    MAC: '',
    P_Model: '',
    P_Marca: '',
    M_Serial: '',
    M_Model: '',
    M_Marca: '',
    Systema: '',
    OS_Arch: '',
    OS_Version: '',
    Estado: '',
    Puerto: '',
    Oficina: ''
}

const database={
    host:'127.0.0.1',
    user:'root',
    password:'Ytjda3toGe',
    database:'BAUSTRO'
}

const pool=mysql.createPool(database)

pool.getConnection((err, conecction)=>{
    if (err) console.error(err)
    if (conecction) conecction.release()
})


promisify(pool.query)
module.exports={pool,mycpu}