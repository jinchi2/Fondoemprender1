import { Link } from "react-router-dom"

const Veremprendimiento = ({ emprendimiento }) => {
  const { titulo, descripcion, imagen  } = emprendimiento

  return (
    <div className="bg-gray-200 shadow rounded-lg p-10 justify-center mt-10 mr-10">
          <div className="ml-10">
            {emprendimiento.imagen && <img src={imagen.url} style={{ width: '85%', height: 'auto' }}/> }
          </div>
          
          <div className="ml-10 mt-10">
                <h1 className="uppercase font-black text-2xl text-center">{titulo}</h1>
                <p className="mt-7 mb-7">
                    <span className="text-sm">{''}{descripcion}</span>
                </p>
                <h2 className="text-center">
                    
                </h2>
            </div>
          </div>
  )
}

export default Veremprendimiento
