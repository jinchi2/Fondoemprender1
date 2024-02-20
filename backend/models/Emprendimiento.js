import mongoose from "mongoose";

const empredimientosSchema = mongoose.Schema({
    titulo:{
        type: String,
        trim: true,
        required: true
    },
    telefono:{
        type: String,
        trim: true,
        required: true
    },
    direccion: {
        type: String,
        trim: true,
        required: true
    },
    descripcion:{
        type: String,
        trim: true,
        required: true
    },
    imagen: {
        url: String,
        public_id: String
    },
    beneficiario: {
        type: String,
        trim: true,
        required: true
    },
    presupuestos: {
        type: String,
        trim: true,
        required: true
    },
    creador:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Usuario",
        required: true
    },
},{
     timestamps: true,

})

const Emprendimiento = mongoose.model('Emprendimiento', empredimientosSchema)

export default Emprendimiento