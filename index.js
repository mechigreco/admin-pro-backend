require('dotenv').config();

const express = require('express');

const cors = require('cors')
const { dbConnection } = require('./database/config');

//Crear el servidor de express

const app = express();

//configurar Cors
app.use( cors() );

//BASE DE DATOS
// mean_user
// ivUUi6VwrPD94aQB
dbConnection();
//console.log(process.env);

//RUTAS 
app.get('/', (req, res)=>{
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });
});


app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en puerto '+process.env.PORT);
});