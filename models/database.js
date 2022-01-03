const mysql=require('mysql');
const {promisify}=require('util')

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
module.exports=pool