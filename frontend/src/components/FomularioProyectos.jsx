import { useState } from "react"

const FomularioProyectos = () => {

    const [nombre, setNombre] = useState('')
    

  return (
    <from className='bg-white py-10 px-5 md:w-1/2 rounded-lg shadow'>
        <div className='mb-5'>
            <label
                className='text-gray-700 uppercase font-bold text-sm'
                htmlFor='nombre'
                >Nombre Proyectos</label>
            <input
                id="nombre"
                type="text"
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                placeholder="Nombre del Proyecto"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
            />
        </div>

    </from>
  )
}

export default FomularioProyectos
