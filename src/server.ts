
import express from 'express';
import router from './router';
import db from './config/db';

//conectar a base de datos
async function connectDB(){
    try {
        await db.authenticate()
        db.sync()
        console.log('conexion existosa a la BD')
    } catch (error) {
        console.log(error)
        console.log('Hubo un error al conectar a la base de Datos')
    }
}
connectDB()


const server = express()

//routing
//
server.use('/api/products', router)

export default server