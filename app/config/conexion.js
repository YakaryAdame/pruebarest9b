const mongoose = require('mongoose')
const config =  require ('./configuracion')

module.exports={
    connection : null,
    connect : ()=>{
        if(this.connection) return this.conection
        return mongoose.connect(config.DB)
        .then(conn =>{
            this.connection = conn
            console.log('La conexion se realizo de manera correcta');
        })
        .catch(e =>{console.log('Error en la conexion',e)})
    }
}