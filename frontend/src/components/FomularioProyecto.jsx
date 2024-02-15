import { useState, useEffect } from "react"
import useProyectos from "../hooks/useProyectos"
import Alerta from "./Alerta"
import { useParams } from "react-router-dom"
import clienteAxios from "../config/clienteAxios"

const FomularioProyectos = () => {

    const [id, setId] = useState(null)
    const [titulo, setTitulo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [direccion, setDireccion] = useState('')
    const [imagen, setImagen] = useState('')
    const [beneficiario, setBeneficiario] = useState('')
    const [presupuestos, setPresupuestos] = useState('')

    const params = useParams()
    const { mostrarAlerta, alerta, submitProyecto, } = useProyectos()

    useEffect(() => {
        if (params.id) {
            setId(proyecto._id)
            setTitulo(proyecto.titulo)
            setTelefono(proyecto.telefono)
            setDescripcion(proyecto.descripcion)
            setDireccion(proyecto.direccion)
            setImagen(proyecto.imagen)
            setBeneficiario(proyecto.beneficiario)
            setPresupuestos(proyecto.presupuestos)
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
        await submitProyecto({
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
        setImagen('')
        setBeneficiario('')
        setPresupuestos('')
    }

    const { msg } = alerta

    return (
        <form
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

                <input
                    id="descripcion"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder="Imagen"
                    value={imagen}
                    onChange={e => setImagen(e.target.value)}
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
                value='Enviar Información'
                className='bg-green-600 w-full p-3 uppercase font-bold text-white
            rounded cursos-pointer hover:bg-green-700 transition-colors'

            />



        </form>
    )
}

export default FomularioProyectos
