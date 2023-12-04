import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors"
import usuarioRoutes from './routes/usuarioRoutes.js'
import emprendimientoRoutes from './routes/emprendimientoRoutes.js'

const app = express();
app.use(express.json())


dotenv.config();
conectarDB();

// Configurar CORS
const whitelist =["http://localhost:5173"]

const corsOptions ={
    origin: function(origin, callback){
        if (whitelist.includes(origin)) {
            // Puede consultar la API
            callback(null, true)
        }else{
            // No esta permitido el req
            callback(new Error("Error de Cors"))
        }
    }
}
app.use(cors(corsOptions))


//Routing 路由
app.use('/api/usuarios',usuarioRoutes)
app.use('/api/emprendimiento',emprendimientoRoutes)


const PORT = process.env.PORT || 4000;
app.listen(4000, () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});