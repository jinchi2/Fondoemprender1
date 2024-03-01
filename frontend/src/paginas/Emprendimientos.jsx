import React, { useEffect, useState } from 'react';
import useEmprendimientos from "../hooks/useEmprendimientos"
import PreviewEmprendimiento from "../components/PreviewEmprendimiento"

const Emprendimientos = () => {

  const { obtenerEmprendimientos, cargando } = useEmprendimientos()
  //const [emprendimientos, setEmprendimientos] = useState([])
  const { emprendimientos } = useEmprendimientos()

  /*useEffect(() => {
    const emprendimientos = async () => {
      setEmprendimientos(await obtenerEmprendimientos())
    }
    emprendimientos();
  }, [])*/

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
