const express=require('express')
const app=express()
const port=8000

app.use(express.static(`${__dirname}/public`))
//1.- Rutas estáticas

//2.- Vistas dinámicas
app.set('view engine','ejs')
app.set('views',`${__dirname}/views`)

//3.- Ruteo
app.use('/informe',require('./router/report.js'))

//4.- Estados
app.use((req,res,next)=>{
    res.status(404).render('404')
})
//5.- Listener
app.listen(port,()=>{
    console.log("Servidor Baustro")
})