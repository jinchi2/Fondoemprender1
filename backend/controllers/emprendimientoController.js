import Emprendimiento from "../models/Emprendimiento.js"
import { deleteImg, uploadImage } from "../libs/cloudinary.js";
import fs from 'fs-extra'

const inicioEmprendimientos = async (req, res) => {
    try {
        const emprendimientos = await Emprendimiento.find({}).limit(10)
        res.json(emprendimientos)
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al obtener emprendimientos' });
    }
}

const obtenerEmprendimientos = async (req, res) => {
    try {
        const emprendimientos = await Emprendimiento.find({ creador: req.usuario._id });
        res.json(emprendimientos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al obtener emprendimientos' });
    }
};

const nuevoEmprendimiento = async (req, res) => {
    //const emprendimiento = new Emprendimiento(req.body)
    let imagen;
    if (req.files?.imagen) {
        const result = await uploadImage(req.files.imagen.tempFilePath)
        await fs.remove(req.files.imagen.tempFilePath)
        imagen = {
            url: result.secure_url,
            public_id: result.public_id
        }
    }
    const emprendimiento = new Emprendimiento({
        ...req.body,
        imagen,
    })

    emprendimiento.creador = req.usuario._id
    try {
        const emprendimientoAlmacenado = await emprendimiento.save()
        res.json(emprendimientoAlmacenado)
        console.log(emprendimientoAlmacenado)
    } catch (error) {
        console.log(error)
    }
}

const obtenerEmprendimiento = async (req, res) => {
    const { id } = req.params
    const emprendimiento = await Emprendimiento.findById(id)
    if (!emprendimiento) {
        const error = new Error("No encontrado")
        return res.status(404).json({ msg: error.message })
    }
    if (console.log(emprendimiento.creador.toString() !== req.usuario._id.toString())) {
        const error = new Error("Accion no Valida")
        return res.status(401).json({ msg: error.message })
    }

    res.json(emprendimiento)
}

const editarEmprendimiento = async (req, res) => {
    const { id } = req.params
    const emprendimiento = await Emprendimiento.findById(id)

    if (!emprendimiento) {
        const error = new Error("No encontrado")
        return res.status(404).json({ msg: error.message })
    }
    if (console.log(emprendimiento.creador.toString() === req.usuario._id.toString())) {
        const error = new Error("Accion no Valida")
        return res.status(401).json({ msg: error.message })
    }
    //Actualizar imagen 
    if (req.files?.img) {
        const result = await uploadImage(req.files.img.tempFilePath)
        //eliminar la imagen anterior
        if (emprendimiento.img && emprendimiento.img.public_id) {
            await deleteImg(emprendimiento.img.public_id);
        }
        emprendimiento.img = {
            url: result.secure_url,
            public_id: result.public_id
        }
        //eliminar el archivo temporal de la imagen
        await fs.remove(req.files.img.tempFilePath);
    }
    emprendimiento.titulo = req.body.titulo || emprendimiento.titulo
    emprendimiento.telefono = req.body.telefono || emprendimiento.telefono
    emprendimiento.direccion = req.body.direccion || emprendimiento.direccion
    emprendimiento.descripcion = req.body.descripcion || emprendimiento.descripcion
    emprendimiento.imagen = req.body.imagen || emprendimiento.imagen
    emprendimiento.beneficiario = req.body.beneficiario || emprendimiento.beneficiario
    emprendimiento.presupuestos = req.body.presupuestos || emprendimiento.presupuestos

    try {
        const emprendimientoAlmacenado = await emprendimiento.save()
        res.json(emprendimientoAlmacenado)
    } catch (error) {
        console.log(error)
    }
}

const eliminarEmprendimiento = async (req, res) => {
    const { id } = req.params
    const emprendimiento = await Emprendimiento.findById(id)
    if (!emprendimiento) {
        const error = new Error("No encontrado")
        return res.status(404).json({ msg: error.message })
    }
    if (console.log(emprendimiento.creador.toString() === req.usuario._id.toString())) {
        const error = new Error("Accion no Valida")
        return res.status(401).json({ msg: error.message })
    }

    try {
        await emprendimiento.deleteOne()
        res.json({ msg: "Emprendimiento Eliminado" })
    } catch (error) {
        console.log(error)
    }
}

const obtenerProductos = async (req, res) => { }

export {
    obtenerEmprendimientos,
    nuevoEmprendimiento,
    obtenerEmprendimiento,
    editarEmprendimiento,
    eliminarEmprendimiento,
    obtenerProductos,
    inicioEmprendimientos
}