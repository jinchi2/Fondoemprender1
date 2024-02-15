import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors"
import morgan from "morgan";
import usuarioRoutes from './routes/usuarioRoutes.js'
import emprendimientoRoutes from './routes/emprendimientoRoutes.js'

const app = express();
app.use(express.json())
app.use(morgan("dev"))

dotenv.config();
conectarDB();

// Configurar CORS
const whitelist = [process.env.FRONTEND_URL]

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.includes(origin)) {
            // Puede consultar la API
            callback(null, true)
        } else {
            // No esta permitido el req
            callback(new Error("Error de Cors"))
        }
    }
}
app.use(cors(corsOptions))


//Routing 路由
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/emprendimiento', emprendimientoRoutes)


const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});