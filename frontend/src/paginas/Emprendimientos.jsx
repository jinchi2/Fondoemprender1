import React, { useEffect, useState } from 'react';
import useEmprendimientos from "../hooks/useEmprendimientos"
import PreviewEmprendimiento from "../components/PreviewEmprendimiento"

const Emprendimientos = () => {

  const { obtenerEmprendimientos, cargando } = useEmprendimientos()
  const [emprendimientos, setEmprendimientos] = useState([])

  useEffect(() => {
    const emprendimientos = async () => {
      setEmprendimientos(await obtenerEmprendimientos())
    }
    emprendimientos();
  }, [])

  if (cargando) return <h1>Cargando...</h1>

  return (
    <>
      <h1 className='text-4xl font-black'>Emprendimientos</h1>


      <div className='bg-white shadow mt-10 rounded-lg-5'>
        {emprendimientos.length ?
          emprendimientos.map(emprendimiento => (
            <PreviewEmprendimiento
              key={emprendimiento._id}
              emprendimiento={emprendimiento}
            />
          ))
          : <p className='text-center text-red-600 uppercase p-5'>no hay emprendimientos</p>}
      </div>
    </>
  )
}

export default Emprendimientos
