const express=require('express')
const bodyP=require('body-parser')
const app=express()
const port=8000
const mysql=require('mysql')



//3.1 Peticiones Post
app.use(bodyP.urlencoded({extended:false}))
app.use(bodyP.json())
//1.- Rutas estáticas
app.use(express.static(`${__dirname}/public`))

//2.- Vistas dinámicas
app.set('view engine','ejs')
app.set('views',`${__dirname}/views`)

//3.- Ruteo
app.use('/informe',require('./router/informe.js'))
app.use('/equipos', require('./router/equipos.js'))

//4.- Estados
app.use((req,res,next)=>{
    res.status(404).render('404')
})
//5.- Listener
app.listen(port,()=>{
    console.log(`Servidor Baustro en puerto: ${port}`)
    
})

//6.- Conexion con Mysql
/*
const database={
    host:'127.0.0.1',
    user:'root',
    password:'Ytjda3toGe',
    database:'BAUSTRO'
}

const con=mysql.createConnection(database)

con.connect((err, connection)=>{
    if(err) throw err
    console.log('Conectado a Mysql')
    con.query('SELECT Codigo, IP FROM Procesadores', (err,result)=>{
        if (err) throw err
        result.forEach(element => {
            console.log(element)
        });
    })
})*/