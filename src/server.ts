import colors from 'colors'
import express from 'express';
import router from './router';
import db from './config/db';

//conectar a base de datos
async function connectDB(){
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.magenta('conexion existosa a la BD'))
    } catch (error) {
        console.log(error)
        console.log(colors.red.bold('Hubo un error al conectar a la base de Datos'))
    }
}
connectDB()


//instancia de express
const server = express()


//leer datos de formularios
server.use(express.json())

//routing
//
server.use('/api/products', router)

export default server