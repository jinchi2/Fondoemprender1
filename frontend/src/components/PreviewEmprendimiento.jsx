import { Link } from "react-router-dom"

const PreviewEmprendimiento = ({ emprendimiento }) => {
  const { titulo, _id} = emprendimiento
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