import { useState, useEffect } from "react"
import useEmprendimientos from "../hooks/useEmprendimientos"
import Alerta from "./Alerta"
import { useParams } from "react-router-dom"

const FomularioEmprendimientos = () => {

    const [id, setId] = useState(null)
    const [titulo, setTitulo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [direccion, setDireccion] = useState('')
    const [imagen, setImagen] = useState(null)
    const [beneficiario, setBeneficiario] = useState('')
    const [presupuestos, setPresupuestos] = useState('')
    const [imagever, setImagever] = useState(null)

    const params = useParams()

    const subirImagen = (e) => {
        const nuevaImagen = e.target.files[0]
         // Actualizar el estado de la imagen para enviar al servidor
        setImagen(nuevaImagen)
        // Crear una URL de objeto para la previsualización
        const nuevaImagenPreview = URL.createObjectURL(nuevaImagen)
        setImagever(nuevaImagenPreview)

    }

    const { mostrarAlerta, alerta, submitEmprendimiento, emprendimiento } = useEmprendimientos()
    useEffect(() => {
        if (params.id) {
            setId(emprendimiento._id)
            setTitulo(emprendimiento.titulo)
            setTelefono(emprendimiento.telefono)
            setDescripcion(emprendimiento.descripcion)
            setDireccion(emprendimiento.direccion)
            setImagen(emprendimiento.imagen)
            setBeneficiario(emprendimiento.beneficiario)
            setPresupuestos(emprendimiento.presupuestos)
            if (emprendimiento.imagen) {
                setImagever(emprendimiento.imagen.url);
            }
        }
    }, [params])


    const handleSumbit = async e => {
        e.preventDefault()

        if ([titulo, telefono, descripcion, direccion, imagen, beneficiario, presupuestos].includes('')) {
            mostrarAlerta({
                msg: 'Todos los campos son Obligatorios',
                error: true
            })
            return
        }

        // pasar los datos hacia el provider
        await submitEmprendimiento({
            id,
            titulo,
            telefono,
            direccion,
            descripcion,
            imagen,
            beneficiario,
            presupuestos
        })

        setId(null)
        setTitulo('')
        setTelefono('')
        setDescripcion('')
        setDireccion('')
        setImagen(null)
        setBeneficiario('')
        setPresupuestos('')
    }

    const { msg } = alerta

    return (
        <form
            encType="multipart/form-data"
            className='bg-white py-10 px-5 md:w-1/2 rounded-lg shadow'
            onSubmit={handleSumbit}
        >
            {msg && <Alerta alerta={alerta} />}

            <div className='mb-5'>
                <label
                    className='text-gray-700 uppercase font-bold text-sm'
                    htmlFor='titulo'
                >Titulo</label>

                <input
                    id="titulo"
                    type="text"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder="escribe tu titulo"
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                <label
                    className='text-gray-700 uppercase font-bold text-sm'
                    htmlFor='telefono'
                >Telefono</label>

                <input
                    id="telefono"
                    type='numero'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder="escribe tu telefono"
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                <label
                    className='text-gray-700 uppercase font-bold text-sm'
                    htmlFor='descripcion'
                >Descripcion</label>

                <textarea
                    id="descripcion"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder="escribe tu descripcion"
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                <label
                    className='text-gray-700 uppercase font-bold text-sm'
                    htmlFor='direccion'
                >Direccion</label>

                <input
                    id="direccion"
                    type='text'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder="escribe tu direccion"
                    value={direccion}
                    onChange={e => setDireccion(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                <label
                    className='text-gray-700 uppercase font-bold text-sm'
                    htmlFor='imagen'
                >Imagen</label>

                <div>
                    {imagever && (
                        <img
                            src={imagever}
                        />
                    )}

                </div>

                <input
                    id="imagen"
                    type="file"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder="Imagen"
                    onChange={subirImagen}
                />
                
            </div>

            <div className='mb-5'>
                <label
                    className='text-gray-700 uppercase font-bold text-sm'
                    htmlFor='beneficiario'
                >Beneficiario</label>

                <input
                    id="beneficiario"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder="escribe tu beneficiario"
                    value={beneficiario}
                    onChange={e => setBeneficiario(e.target.value)}
                />
            </div>

            <div className='mb-5'>
                <label
                    className='text-gray-700 uppercase font-bold text-sm'
                    htmlFor='presupuestos'
                >Presupuestos</label>

                <input
                    id="presupuestos"
                    type='text'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder="escribe tu presupuestos"
                    value={presupuestos}
                    onChange={e => setPresupuestos(e.target.value)}
                />
            </div>

            <input
                type='submit'
                value={id ? 'Actualizar Emprendimiento' : 'Enviar informacion'}
                className='bg-green-600 w-full p-3 uppercase font-bold text-white
                rounded cursos-pointer hover:bg-green-700 transition-colors'

            />





        </form>
    )
}

export default FomularioEmprendimientos
