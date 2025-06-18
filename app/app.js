
const express = require('express')
const app = express();
const router = require('./routes/gymRouter')


//Desencriptar la informacion y manejar en formato json
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//Ejecutar router
app.use('/gym',router)

module.exports=app;