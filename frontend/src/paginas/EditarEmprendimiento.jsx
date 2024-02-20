import { useEffect } from "react"
import { useParams } from "react-router-dom"
import FomularioProyectos from "../components/FomularioProyecto"
import useProyectos from "../hooks/useProyectos"

const EditarEmprendimiento = () => {
    const params = useParams()
    
    const { obtenerEmprendimiento, emprendimiento, cargando } = useProyectos()

    useEffect(() => {
      obtenerEmprendimiento(params.id)
    }, [])
    const { titulo } = emprendimiento

    if (cargando) return 'cargando......'
    

  return (
    <>
        <h1 className='font-black text-4xl'>Editar Emprendimiento: {titulo}</h1>

        <div className='mt-10 flex justify-center'>
              <FomularioProyectos />
        </div>

       
    </>
  )
}

export default EditarEmprendimiento
