const express=require('express')
const bodyP=require('body-parser')
const app=express()
const port=8000

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