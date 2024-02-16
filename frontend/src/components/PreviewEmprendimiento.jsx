import { Link } from "react-router-dom"

const PreviewEmprendimiento = ({ emprendimiento }) => {
  const {titulo, _id, descripcion} = emprendimiento
  return (
    <div className='border-b p-5 flex'>
        <p className=' flex-1'>
            {titulo}

            <span className='text-sm text-gray-500 uppercase'>{''}
            {descripcion}
            </span>
        </p>

        <Link
            to={`${_id}`}
            className='text-gray-600 hover:text-gray-800 uppercase text-sm font-bold'
        
        >Ver Emprendimiento

        </Link>

    </div>

  )
}

export default PreviewEmprendimiento