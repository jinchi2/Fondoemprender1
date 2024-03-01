

const Veremprendimiento = ({ emprendimiento }) => {
  const { titulo, descripcion, imagen  } = emprendimiento

  return (
      <div className="rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {emprendimiento.imagen && <img src={imagen.url}/> }</div>
          
            <h1 className="font-bold text-xl mb-2">{titulo}</h1>
            <p className="text-gray-700 text-base">
              {descripcion}
              
            </p>
            
          </div>
      </div>
  )
}

export default Veremprendimiento
