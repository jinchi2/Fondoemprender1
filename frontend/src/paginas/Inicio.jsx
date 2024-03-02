import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useEmprendimientos from "../hooks/useEmprendimientos"
import Veremprendimiento from "../components/Veremprendimiento"
//pagina prinsipar

const Inicio = () => {
  const { emprendimientosInicio, cargando } = useEmprendimientos()
  const [emprendimientos, setEmprendimientos] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) return navigate("/emprendimientos")
    const getEmprendimientos = async () => {
      const res = await emprendimientosInicio()
      setEmprendimientos(res)
    }
    getEmprendimientos()
  }, [])

  if (cargando) return <h1>Cargando...</h1>

  return (
    <>
      <h1 className='text-4xl font-black'>Bienvenidos</h1>

      <div className='bg-white shadow mt-10 rounded-lg'>
        {emprendimientos.length ?
          emprendimientos.map(emprendimiento => (
            <Veremprendimiento
              key={emprendimiento._id}
              emprendimiento={emprendimiento}
            />

          ))
          : <p className='mt-5 text-center text-gray-600 uppercase'>No puedes ver</p>}
      </div>

    </>
  )
}

export default Inicio
