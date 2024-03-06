import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InfoEmprendimiento from '../paginas/InfoEmprendimiento';


const Veremprendimiento = ({ emprendimiento }) => {
  const { titulo, descripcion, direccion, beneficiario, presupuestos, imagen, _id } = emprendimiento;
  const [mostrarInfo, setMostrarInfo] = useState(false);

  const handleClick = () => {
    // Muestra la información detallada al hacer clic en "Ver Emprendimiento"
    setMostrarInfo(true);
  };

  return (
    <div className="bg-gray-200 shadow rounded-lg p-10 justify-center mt-10 mr-10">
      <div className="ml-10">
        {imagen && <img src={imagen.url} style={{ width: '22rem', height: '22rem' }} alt={titulo} />}
      </div>

      <div className="ml-10 mt-10">
        <h1 className="uppercase font-black text-2xl text-center">{titulo}</h1>
        <p className="mt-7 mb-7">
          <span className="text-sm">{descripcion}</span>
        </p>
        <h2 className="text-center">
          {/* Maneja el clic para mostrar la información detallada */}
          <button onClick={handleClick} className='text-gray-600 hover:text-gray-800 uppercase text-sm font-bold'>
            Ver Emprendimiento
          </button>
        </h2>
      </div>

      {/* Muestra InfoEmprendimiento cuando mostrarInfo es true */}
      {mostrarInfo && <InfoEmprendimiento emprendimiento={emprendimiento} />}

      {/* Agrega un botón para cerrar la vista detallada */}
      {mostrarInfo && (
        <div className="mt-5 text-center">
          <button onClick={() => setMostrarInfo(false)} className='text-gray-600 hover:text-gray-800 uppercase text-sm font-bold'>
            Cerrar Vista Detallada
          </button>
        </div>
      )}
    </div>
  );
};

export default Veremprendimiento;
