import { Link } from "react-router-dom"

const PreviewEmprendimiento = ({ proyecto }) => {
  const { titulo, _id} = proyecto
  return (
    <div className='border-b p-5 flex'>
        <p>

            {titulo}
      
        </p>

        <Link
            to={`${_id}`}
        
        >Ver Emprendimiento

        </Link>

    </div>

  )
}

export default PreviewEmprendimiento