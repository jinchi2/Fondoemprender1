import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useProyectos from '../hooks/useProyectos'

const Emprendimiento = () => {
    const params = useParams()
    
    const { obtenerEmprendimiento } = useProyectos()

    useEffect(() => {
      obtenerEmprendimiento(params.id)
    })

  return (
    <div>
      Emprendimiento
    </div>
  )
}

export default Emprendimiento
